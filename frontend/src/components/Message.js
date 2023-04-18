import React from "react";
import "./style.css";

const Message = ({ sender, message }) => {
  return (
    <div className="message">
      <div className="message-sender">{sender}</div>
      <div className="message-content">{message}</div>
    </div>
  );
};

export default Message;
