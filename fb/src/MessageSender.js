import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import "./MessageSender.css";
import { useStateValue } from "./StateProvider";
import db from "./Firebase";
import firebase from "firebase";
//
function MessageSender() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      image: imageUrl,
      message: input,
      profilePic: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      username: user.displayName,
    });

    setInput("");
    setImageUrl("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender_input"
            placeholder={`What's on your mind, ${user.displayName}?`}
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="image URL (Optional)"
          />
          <button type="submit" style={{ display: "none" }}>
            hidden submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <EmojiEmotionsIcon style={{ color: "orange" }} />
          <h3>Feelings/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
