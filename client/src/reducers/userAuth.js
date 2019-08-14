import { LOGIN_USER, LOGOUT_USER } from "../actions/constants";

const initalState = { user: null };

const userAuth = (state = initalState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      state.user = action.payload;
      return state;
    case LOGOUT_USER:
      state.user = null;
      return state;
    default:
      return state;
  }
};

export default userAuth;
