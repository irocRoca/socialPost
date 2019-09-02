import React from "react";
import { Card, List } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";
import { useSelector } from "react-redux";
import { useQuery } from "@apollo/react-hooks";
import { GET_USER } from "../util/graphql/user";

const ProfileInfo = () => {
  const user = useSelector(state => state.userData);
  const {
    loading,
    data: { getUser: userInfo }
  } = useQuery(GET_USER, {
    variables: { id: user.id }
  });
  return (
    <div>
      {loading ? (
        <h1>loading..</h1>
      ) : (
        <Card>
          <Card.Content>
            <Card.Header textAlign="center">
              <Link to="/profile">
                <Image
                  cloudName="rocasto"
                  publicId={userInfo.photo}
                  width="150"
                  height="150"
                  gravity="face"
                  radius="max"
                  crop="fill"
                  // className="ui small image"
                  style={{ padding: "1rem" }}
                />
              </Link>
              {/* <Image
                as={Link}
                to="/profile"
                style={{ padding: "1rem" }}
                size="small"
                circular
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1wJ90xBHS5VQEdYGHqdyZKpfbCnU2sl_5jFxSlJtOuodsCoVo"
              /> */}
            </Card.Header>
            <Card.Header textAlign="center">{`${userInfo.firstName} ${userInfo.lastName}`}</Card.Header>

            <Card.Meta textAlign="center">
              <span> {`@ ${userInfo.userName}`}</span>
            </Card.Meta>
            <Card.Description>
              {userInfo.bio === "" ? (
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </span>
              ) : (
                userInfo.bio
              )}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <List>
              <List.Item icon="marker" content="Miami, FL" />
              <List.Item
                icon="mail"
                content={
                  <a href={`mailto:${userInfo.email}`}>{userInfo.email}</a>
                }
              />
            </List>
          </Card.Content>
        </Card>
      )}
    </div>
  );
};

export default ProfileInfo;
