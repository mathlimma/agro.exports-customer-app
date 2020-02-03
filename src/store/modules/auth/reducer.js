import produce from 'immer';

import {
  SIGN_IN_FACEBOOK_FAILURE,
  SIGN_IN_FACEBOOK_REQUEST,
  SIGN_IN_FACEBOOK_SUCCESS,
  SIGN_IN_GOOGLE_FAILURE,
  SIGN_IN_GOOGLE_REQUEST,
  SIGN_IN_GOOGLE_SUCCESS,
} from '../types';

const INITIAL_STATE = {
  signed: false,
  token: null,
};

export default function AuthReducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case SIGN_IN_FACEBOOK_REQUEST: {
        break;
      }
      case SIGN_IN_FACEBOOK_SUCCESS: {
        draft.signed = true;
        draft.token = action.payload.token;
        break;
      }
      case SIGN_IN_FACEBOOK_FAILURE: {
        break;
      }
      case SIGN_IN_GOOGLE_REQUEST: {
        break;
      }
      case SIGN_IN_GOOGLE_SUCCESS: {
        draft.signed = true;
        draft.token = action.payload.token;
        break;
      }
      case SIGN_IN_GOOGLE_FAILURE: {
        break;
      }
      default:
    }
  });
}
