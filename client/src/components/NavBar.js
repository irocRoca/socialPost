import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions";

const NavBar = () => {
  const user = useSelector(state => state.userData);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const nav = user ? (
    <div style={{ marginBottom: "2rem" }}>
      <Menu pointing secondary>
        <Menu.Item header name="Social App" as={Link} to="/" />
        <Menu.Menu position="right">
          <Menu.Item
            name={user.userName}
            as={Link}
            to={`/profile/${user.id}`}
            // active={activeItem === "logout"}
            // onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Logout"
            as={Link}
            to="/"
            // active={activeItem === "logout"}
            onClick={handleLogout}
          />
        </Menu.Menu>
      </Menu>
    </div>
  ) : (
    <div style={{ marginBottom: "2rem" }}>
      <Menu pointing secondary>
        <Menu.Item header name="Social App" as={Link} to="/" />
        <Menu.Menu position="right">
          <Menu.Item
            name="Login"
            as={Link}
            to="/login"
            // active={activeItem === "logout"}
            // onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Register"
            as={Link}
            to="/register"
            // active={activeItem === "logout"}
            // onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    </div>
  );
  return nav;
};

export default NavBar;
