import React from "react";
import Post from "../components/Post";
import Profile from "../components/Profile";
import Comments from "../components/Comments";
import gql from "graphql-tag";
import { Grid } from "semantic-ui-react";
import { useQuery } from "@apollo/react-hooks";

const GET_POSTS = gql`
  {
    getPosts {
      id
      body
      userName
      createdAt
      userId
    }
  }
`;

const Home = () => {
  const {
    loading,
    data: { getPosts: posts }
  } = useQuery(GET_POSTS);

  return (
    <div>
      <Grid centered>
        <Grid.Row>
          <Grid.Column only="computer" computer={5}>
            <Profile />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={12} computer={7}>
            <Grid.Row>
              {posts && posts.map(item => <Post data={item} key={item.id} />)}
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Home;
