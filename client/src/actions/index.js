import { LOGIN_USER, LOGOUT_USER } from "./constants";

export const loginUser = userData => {
  localStorage.setItem("token", userData.token);
  return {
    type: LOGIN_USER,
    payload: userData
  };
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  return { type: LOGOUT_USER };
};
