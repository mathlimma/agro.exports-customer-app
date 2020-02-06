import { SIGN_IN_REQUEST, SIGN_IN_FAILURE, SIGN_IN_SUCCESS } from '../types';

export function signInRequest(email, password) {
  return {
    type: SIGN_IN_REQUEST,
    payload: {
      email,
      password,
    },
  };
}

export function signInSuccess(producer, token) {
  console.log('success');
  return {
    type: SIGN_IN_SUCCESS,
    payload: {
      producer,
      token,
    },
  };
}

export function signInFailure() {
  console.log('fail');
  return {
    type: SIGN_IN_FAILURE,
  };
}
