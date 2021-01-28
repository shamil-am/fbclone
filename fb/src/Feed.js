import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from './Post'
//
function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post 
      profilePic="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/11/8/1415445010984/Mark-Zuckerberg-012.jpg?width=620&quality=85&auto=format&fit=max&s=053c9d9f9020b3ec4521cc6b5a26e16a"
      image="https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/8/shutterstock_199419065.jpg"
      username="Mark Zuckerberg"
      timestamp="20:00:02"
      message="This is amazing))"
      />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
