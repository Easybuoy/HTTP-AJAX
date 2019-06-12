import React from "react";

export default function NewFriend() {
  return (
    <div>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="text" placeholder="Email" required />
        <input type="number" placeholder="Age" required />
        <input type="submit" value="Add Friend" />
      </form>
    </div>
  );
}
