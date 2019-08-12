import React from "react";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PostInfo from "./pages/PostInfo";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Container } from "semantic-ui-react";

const App = () => {
  return (
    <Router>
      <Container>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/post" component={PostInfo} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
