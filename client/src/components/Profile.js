import React from "react";
import { Card, Image, List } from "semantic-ui-react";

const Profile = () => {
  return (
    <div>
      <Card>
        <Card.Content>
          <Card.Header textAlign="center">
            <Image
              style={{ padding: "1rem" }}
              size="small"
              circular
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1wJ90xBHS5VQEdYGHqdyZKpfbCnU2sl_5jFxSlJtOuodsCoVo"
            />
          </Card.Header>
          <Card.Header textAlign="center">John Doe</Card.Header>

          <Card.Meta textAlign="center">
            <span>@username</span>
          </Card.Meta>
          <Card.Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <List>
            <List.Item icon="marker" content="Miami, FL" />
            <List.Item
              icon="mail"
              content={<a href="mailto:test@test.com">johnDoe@test.com</a>}
            />
          </List>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Profile;
