import React, { useState } from "react";
import axios from "axios";

export default function NewFriend({ match }) {
  const friendId = match.params.friendId;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleName = e => {
    setName(e.target.value);
  };

  const handleEmail = e => {
    setEmail(e.target.value);
  };

  const handleAge = e => {
    setAge(e.target.value);
  };
  const handleNewFriend = () => {
    axios
      .post("http://localhost:5000/friends", {
        name: name,
        email: email,
        age: age
      })
      .then(res => setResponse("Friend Created Successfully"))
      .catch(err => setError("Error Creating Friend"))
      .finally(() => setLoading(false));
  };

  const handleUpdateFriend = () => {
    axios
      .put(`http://localhost:5000/friends/${friendId}`, {
        name: name,
        email: email,
        age: age
      })
      .then(res => setResponse("Successfully Updated Friend"))
      .catch(err => setError("Error Updating Friend"))
      .finally(() => setLoading(false));
  };

  let friendDecision = handleNewFriend;
  if (friendId) {
    friendDecision = handleUpdateFriend;
  }
  console.log(friendDecision);

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (response) {
    return <div>{response}</div>;
  }

  return (
    <div>
      <form>
        <input
          onChange={handleName}
          type="text"
          placeholder="Name"
          value={name}
          required
        />
        <input
          onChange={handleEmail}
          type="email"
          placeholder="Email"
          value={email}
          required
        />
        <input
          onChange={handleAge}
          type="number"
          placeholder="Age"
          value={age}
          required
        />
        <input onClick={friendDecision} type="submit" value="Add Friend" />
      </form>
    </div>
  );
}
