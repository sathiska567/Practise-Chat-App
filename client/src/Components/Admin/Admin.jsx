import React from 'react';
import { Avatar, Badge } from 'antd';

import io from "socket.io-client"

const socket = io.connect("http://localhost:8080");
console.log(socket);

useEffect(()=>{
   socket.on("receive_message", (data) => {
        console.log("Receive message : " , data)
   })
},[])


const App = () => (
  <Badge count={5}>
    <Avatar shape="square" size="large" />
  </Badge>
);
export default App;