import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
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
};

export default NavBar;
