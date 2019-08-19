import { LOGIN_USER, LOGOUT_USER } from "../actions/constants";
import jwt from "jsonwebtoken";

let initalState = null;

if (localStorage.getItem("token")) {
  const decodedToken = jwt.decode(localStorage.getItem("token"));
  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem("token");
  } else {
    initalState = decodedToken;
  }
}

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
