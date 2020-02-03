import { all, takeLatest, call, put } from 'redux-saga/effects';
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';
import axios from 'axios';
import { SIGN_IN_FACEBOOK_REQUEST, SIGN_IN_GOOGLE_REQUEST } from '../types';
import api from '../../../services/api';
import * as authActions from './actions';

export function* signInFacebook() {
  try {
    yield call(Facebook.initializeAsync, '2765038933518909');
    const login = yield call(Facebook.logInWithReadPermissionsAsync, {
      permissions: ['public_profile'],
    });

    if (login.type === 'success') {
      const user = yield call(
        axios.get,
        `https://graph.facebook.com/me?fields=id,name,email,birthday,picture.height(150).width(150)&access_token=${login.token}`
      );
      const { name, id, picture, email } = user.data;
      const response = yield call(api.post, 'auth', {
        fullname: name,
        facebook_id: id,
        photo_url: picture.data.url,
        email,
      });
      const { token } = response.data;
      api.defaults.headers.Authorization = `Bearer ${token}`;
      yield put(authActions.signInFacebookSuccess(token));
    }
  } catch (error) {
    console.tron.log(error);
    yield put(authActions.signInFacebookFailure());
  }
}

export function* signInGoogle() {
  try {
    const result = yield call(Google.logInAsync, {
      androidClientId:
        '712948781640-qldk9c8q363166n7be3k30mvkde80k51.apps.googleusercontent.com',
      iosClientId:
        '712948781640-uqted76nu8vftokc063p31bbkfle3v84.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
      const { email, name, photoUrl, id } = result.user;
      const response = yield call(api.post, 'auth', {
        fullname: name,
        google_id: id,
        photo_url: photoUrl,
        email,
      });
      const { token } = response.data;
      api.defaults.headers.Authorization = `Bearer ${token}`;
      yield put(authActions.signInGoogleSuccess(token));
    }
  } catch (error) {
    yield put(authActions.signInFacebookFailure());
  }
}

export default all([
  takeLatest(SIGN_IN_FACEBOOK_REQUEST, signInFacebook),
  takeLatest(SIGN_IN_GOOGLE_REQUEST, signInGoogle),
]);
