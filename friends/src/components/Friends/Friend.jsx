import React from "react";

export default function Friend({ friend, handleDeleteFriend }) {
  //   console.log(friend);
  const { id, name, age, email } = friend;
  return (
    <div>
      <p>Friend Name: {name}</p>
      <p>Friend Age: {age}</p>
      <p>Friend Email: {email}</p>
      <button onClick={() => handleDeleteFriend(id)}>Delete Friend</button>
    </div>
  );
}
