import React, { useEffect, useState } from "react";
import { FormControl, InputLabel, Input } from "@material-ui/core";

import "./App.css";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";

import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";
function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Please Enter Your Name:"));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="App">
      <img
        src="https://www.freepnglogos.com/uploads/facebook-messenger-png/facebook-chat-logo-png-transparent-svg-vector-8.png"
        width="100"
        alt=""
      />
      <p>
        <h2>Messenger App</h2> Built by Somanath Goudar
      </p>
      <h2>Welcome {username}</h2>
      <div>
        <form className="app__form">
          <FormControl className="app__formControl">
            <InputLabel>Enter a Message...</InputLabel>
            <Input
              className="app__input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />

            <IconButton
              className="app__iconButton"
              disabled={!input}
              variant="contained"
              color="primary"
              type="submit"
              onClick={sendMessage}
            >
              <SendIcon />
            </IconButton>
          </FormControl>
        </form>
      </div>

      <div>
        <FlipMove>
          {messages.map(({ id, message }) => (
            <Message key={id} username={username} message={message} />
          ))}
        </FlipMove>
      </div>
    </div>
  );
}

export default App;
