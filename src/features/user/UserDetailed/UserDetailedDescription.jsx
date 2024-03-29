import React from "react";
import { Grid, Header, Icon, Item, List, Segment } from "semantic-ui-react";
import format from "date-fns/format";

const UserDetailedDescription = ({ profile }) => {
  const aboutDisplayName = "About " + profile.displayName;
  let createdAt ='Unknown';
  if(profile.createdAt){
    createdAt= format(profile.createdAt, "MMMM D, YYYY")
  }
  return (
    <Grid.Column width={12}>
      <Segment>
        <Grid columns={2}>
          <Grid.Column width={10}>
            <Header icon="smile" content={aboutDisplayName} />
            <p>
              I am a: <strong>{profile.occupation|| 'N/A'}</strong>
            </p>
            <p>
              Originally from: <strong>{profile.origin|| 'N/A'}</strong>
            </p>
            <p>
              Member Since: <strong>{createdAt}</strong>
            </p>
            <p>{profile.description}</p>
          </Grid.Column>
          <Grid.Column width={6}>
            <Header icon="heart outline" content="Interests" />
            {profile.interests ?
            <List>
              {profile.interests &&
                profile.interests.map((interest, index) => (
                  <Item key={index}>
                    <Icon name="heart" />
                    <Item.Content>{interest}</Item.Content>
                  </Item>
                ))}
            </List> : <p>No interests</p>}
          </Grid.Column>
        </Grid>
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailedDescription;
