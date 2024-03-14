// 'import "./App.css";
// import io from "socket.io-client";
// import { useState } from "react";
// import Chat from "./Components/Chat";

// const socket = io.connect("http://localhost:8080");   //backend url

// function App() {
//   const [username, setUsername] = useState("");
//   const [room, setRoom] = useState("");
//   const [showChat, setShowChat] = useState(false);

//   const joinRoom = () => {
//     if (username !== "" && room !== "") {
//       socket.emit("join_room", room);
//       setShowChat(true);
//     }
//   };

//   return (
//     <div className="App">
//       {!showChat ? (
//         <div className="joinChatContainer">
//           <h3>Join A Chat</h3>
          
//           <input
//             type="text"
//             placeholder="Enter Your Name..."
//             onChange={(event) => {
//               setUsername(event.target.value);
//             }}
//           />
//           <input
//             type="text"
//             placeholder="Enter Room ID..."
//             onChange={(event) => {
//               setRoom(event.target.value);
//             }}
//           />
//           <button onClick={joinRoom}>Join A Room</button>
//         </div>
//       ) : (
//         <Chat socket={socket} username={username} room={room} />
//       )}
//     </div>

//   );
// }

// export default App;

import React from 'react'
import FormView from './Components/Form/FormView'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function App() {
  return (
    <div>
      {/* <FormView/> */}
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<FormView />} />
      </Routes>
      <Routes>
          <Route path="/" element={<FormView />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
