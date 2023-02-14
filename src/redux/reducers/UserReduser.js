/* eslint-disable prettier/prettier */
import {
  USER_LOGIN_SUCCESS,
  USER_SIGNUP_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTRATION_FAIL,
  USER_LOGOUT_SUCCESS,
} from '../actions/UserAction';

const initialState = {
  userEmail: '',
  token: '',
};

export default function userReduser(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return action.payload;

    case USER_SIGNUP_SUCCESS:
      return action.payload;

    case USER_LOGIN_FAIL:
      return action.payload;

    case USER_REGISTRATION_FAIL:
      return action.payload;

    case USER_LOGOUT_SUCCESS:
        return state;

    default:
      return state;
  }
}
