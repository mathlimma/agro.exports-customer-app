import produce from 'immer';
import { SIGN_IN_REQUEST, SIGN_IN_FAILURE, SIGN_IN_SUCCESS } from '../types';

const INITIAL_STATE = {
  loading: false,
  token: '',
  signed: false,
};

export default function Auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case SIGN_IN_REQUEST: {
        draft.loading = true;
        break;
      }
      case SIGN_IN_SUCCESS: {
        draft.signed = true;
        draft.token = action.payload.token;
        draft.loading = false;
        break;
      }
      case SIGN_IN_FAILURE: {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
