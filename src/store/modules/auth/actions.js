import {
  SIGN_IN_FACEBOOK_FAILURE,
  SIGN_IN_FACEBOOK_REQUEST,
  SIGN_IN_FACEBOOK_SUCCESS,
  SIGN_IN_GOOGLE_FAILURE,
  SIGN_IN_GOOGLE_REQUEST,
  SIGN_IN_GOOGLE_SUCCESS,
} from '../types';

export function signInFacebookRequest() {
  return {
    type: SIGN_IN_FACEBOOK_REQUEST,
  };
}

export function signInFacebookSuccess(token) {
  return {
    type: SIGN_IN_FACEBOOK_SUCCESS,
    payload: { token },
  };
}

export function signInFacebookFailure() {
  return {
    type: SIGN_IN_FACEBOOK_FAILURE,
  };
}

export function signInGoogleRequest() {
  return {
    type: SIGN_IN_GOOGLE_REQUEST,
  };
}

export function signInGoogleSuccess(token) {
  return {
    type: SIGN_IN_GOOGLE_SUCCESS,
    payload: { token },
  };
}

export function signInGoogleFailure() {
  return {
    type: SIGN_IN_GOOGLE_FAILURE,
  };
}
