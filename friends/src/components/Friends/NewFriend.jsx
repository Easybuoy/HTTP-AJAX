import React, { useState } from "react";
import axios from "axios";

export default function NewFriend() {
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
      .then(res => setResponse(res.statusText))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  };

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
        <input onChange={handleName} type="text" placeholder="Name" required />
        <input
          onChange={handleEmail}
          type="email"
          placeholder="Email"
          required
        />
        <input onChange={handleAge} type="number" placeholder="Age" required />
        <input onClick={handleNewFriend} type="submit" value="Add Friend" />
      </form>
    </div>
  );
}
