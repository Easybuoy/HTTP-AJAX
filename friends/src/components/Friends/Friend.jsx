import React from "react";

export default function Friend({ friend }) {
  const { name, age, email } = friend;
  return (
    <div>
      <p>Friend Name: {name}</p>
      <p>Friend Age: {age}</p>
      <p>Friend Email: {email}</p>
    </div>
  );
}
