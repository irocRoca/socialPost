import React from "react";
import Post from "../components/Post";
import Profile from "../components/Profile";
import { Grid } from "semantic-ui-react";

const Home = () => {
  return (
    <div>
      <Grid centered>
        <Grid.Row>
          <Grid.Column only="computer" computer={5}>
            <Profile />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={12} computer={7}>
            <Grid.Row>
              <Post />
              <Post />
              <Post />
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Home;
