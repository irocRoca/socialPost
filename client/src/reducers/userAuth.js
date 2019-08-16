import { LOGIN_USER, LOGOUT_USER } from "../actions/constants";

const initalState = null;

const userAuth = (state = initalState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      state = action.payload;
      return state;
    case LOGOUT_USER:
      state = null;
      return state;
    default:
      return state;
  }
};

export default userAuth;
