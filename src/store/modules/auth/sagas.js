import { all, call, takeLatest, put } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import { SIGN_IN_REQUEST } from '../types';
import * as AuthActions from './actions';
import api from '../../../services/api';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'producer/signin', {
      email,
      password,s
    });
    console.log(response);
    const { producer, token } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;
    yield call(AsyncStorage.setItem, '@token', token);
    yield put(AuthActions.signInSuccess(producer, token));
  } catch (error) {
    console.log(error);
    yield put(AuthActions.signInFailure());
  }
}

export default all([takeLatest(SIGN_IN_REQUEST, signIn)]);
