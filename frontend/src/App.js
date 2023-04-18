import React, { useState } from "react";
import MessageList from "./components/MessageList";

const App = () => {
  // State for storing messages
  const [messages, setMessages] = useState([
    { id: 1, sender: "Alice", message: "Hello from Alice!" },
    { id: 2, sender: "Bob", message: "Hi, Bob here!" },
    { id: 3, sender: "Charlie", message: "Hey, it's Charlie!" },
  ]);

  return (
    <div className="app">
      <h1>My Messaging App</h1>
      <MessageList messages={messages} />
    </div>
  );
};

export default App;
