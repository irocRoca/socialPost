// import jwt from "jsonwebtoken";
// import { useDispatch } from "react-redux";
// import { loginUser } from "../actions";

// module.exports = () => {
//   if (localStorage.getItem("token")) {
//     const decodedToken = jwt.decode(localStorage.getItem("token"));
//     console.log(decodedToken);
//     if (decodedToken.exp * 1000 < Date.now()) {
//       localStorage.removeItem("token");
//     } else {
//       useDispatch(loginUser(decodedToken.payload));
//     }
//   }
// };
