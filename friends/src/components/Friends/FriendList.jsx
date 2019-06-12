import React, { Component } from "react";
import axios from "axios";

import Friend from "./Friend.jsx";

import { CardGroup, H1 } from "../../styles/Styles.js";

export default class FriendList extends Component {
  state = { friends: [], error: "", loading: false };

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friends: res.data }))
      .catch(err => this.setState({ error: err.statusText }))
      .finally(() => this.setState({ loading: false }));
  }

  handleDeleteFriend = id => {
    if (window.confirm("Are you sure you want to delete this friend?")) {
      axios
        .delete(`http://localhost:5000/friends/${id}`)
        .then(res => {
          this.setState({ friends: res.data });
        })
        .catch(err => this.setState({ error: "Error Deleting Friend" }))
        .finally(() => this.setState({ loading: false }));
    }
  };

  render() {
    // {this.state.loading && <div>Loading</div>}

    // {this.state.error && <div>{this.state.error}</div>}
    return (
      <CardGroup>
        <H1>Friends</H1>
        {this.state.friends.map(friend => (
          <Friend
            friend={friend}
            key={friend.id}
            handleDeleteFriend={this.handleDeleteFriend}
          />
        ))}
      </CardGroup>
    );
  }
}
