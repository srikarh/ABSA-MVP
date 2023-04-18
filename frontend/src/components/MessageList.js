import React, { useState } from "react";
import ChatBox from "./ChatBox";
import Message from "./Message";


const MessageList = () => {
    const [messages, setMessages] = useState([]);
  
    const handleSendMessage = (message) => {
      // Add the new message to the messages array
      setMessages([...messages, message]);
      // Send the message to the backend or perform any other logic
      // to handle sending the message to the appropriate recipient
    };

  return (
    <div className="message-list">
      {messages.map((message) => (
        <Message key={message.id} sender={message.sender} message={message.message} />
      ))}
      {/* Render the chat box component */}
      <ChatBox onSendMessage={handleSendMessage} />
    </div>
  );
};

export default MessageList;
