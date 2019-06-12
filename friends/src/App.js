import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import FriendList from "./components/Friends/FriendList.jsx";
import NewFriend from "./components/Friends/NewFriend.jsx";
import Navbar from "./components/Navbar/Navbar";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/addfriend" component={NewFriend} />
      <Route exact path="/" component={FriendList} />
    </Router>
  );
}

export default App;
