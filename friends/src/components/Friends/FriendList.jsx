import React, { Component } from "react";
import axios from "axios";

import Friend from "./Friend.jsx";

export default class FriendList extends Component {
  state = { friends: [], error: "", loading: false };
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friends: res.data }))
      .catch(err => this.setState({ error: err.statusText }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    return (
      <div>
        {this.state.loading && <div>Loading</div>}

        {this.state.error && <div>{this.state.error}</div>}

        {this.state.friends && (
          <div>
            {this.state.friends.map(friend => (
              <Friend friend={friend} key={friend.id} />
            ))}
          </div>
        )}
      </div>
    );
  }
}
