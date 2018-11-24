import React, { Component } from "react";
import { List, Image } from "semantic-ui-react";

class EventListAttendee extends Component {
  render() {
    return (
      <List.Item>
        <div>ATTENDEE</div>
        <Image as ='a' size='mini' circular scr='https://randomuser.me/api/portraits/women/42.jpg'/>
      </List.Item>
    )
  }
}

export default EventListAttendee
