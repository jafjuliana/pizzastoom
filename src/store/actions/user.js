import { userConstants } from "../constants";

function storeUserPoints(user) {
  return {
    type: userConstants.USER_POINTS_SET,
    user,
  };
}

export const userActions = {
  storeUserPoints,
};
