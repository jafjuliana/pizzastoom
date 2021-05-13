import Cookies from 'js-cookie';

import { userConstants } from '../constants';

const userInfo = Cookies.get('points');

const initialState =
  typeof userInfo !== 'undefined' ? JSON.parse(userInfo) : 0;

export function user(state = initialState, action) {
  switch (action.type) {
    case userConstants.USER_POINTS_GET:
      return {
        user: action.user,
      };
    case userConstants.USER_POINTS_SET:
      return {
        user: action.user
      };
    default:
      return {
        user: state
      };
  }
}
