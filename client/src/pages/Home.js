import React from "react";
import Post from "../components/Post";
import ProfileInfo from "../components/ProfileInfo";
import AddPost from "../components/AddPost";
import { GET_POSTS } from "../util/graphql/post";
import { Grid } from "semantic-ui-react";
import { useQuery } from "@apollo/react-hooks";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector(state => state.userData);
  const {
    loading,
    data: { getPosts: posts }
  } = useQuery(GET_POSTS, {
    onError: err => {
      console.log(err.graphQLErrors);
    }
  });

  return (
    <div>
      <Grid centered className={loading ? "loading" : ""}>
        <Grid.Row>
          <Grid.Column only="computer" computer={5}>
            <ProfileInfo />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={12} computer={7}>
            <Grid.Row>{user && <AddPost />}</Grid.Row>
            {posts && posts.map(item => <Post data={item} key={item.id} />)}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Home;
