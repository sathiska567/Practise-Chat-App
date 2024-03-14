import React, { useEffect, useState } from 'react';
import { Avatar, Badge } from 'antd';
import io from "socket.io-client";

const socket = io.connect("http://localhost:8080");

const Admin = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log("Received message: ", data);
      // Update the messages state with the received message
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      // Clean up event listeners when component unmounts
      socket.off("receive_message");
    };
  }, []);

  return (
    <div>
      <Badge count={messages.length}>
        <Avatar shape="square" size="large" />
      </Badge>
      {/* <div>
        <h2>Received Messages:</h2>
        <ul>
          {messages.map((message, index) => (
            <li key={index}>{message.message}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default Admin;
