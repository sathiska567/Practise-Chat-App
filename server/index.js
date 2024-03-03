require("dotenv").config(); // Load environment variables

const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const {Server} = require("socket.io");

const userRoutes = require("./routes/userRoute")

require("./db/db"); 


app.use(express.json()); // middlewares

app.use(cors());
const server = http.createServer(app);

const io = new Server(server , {
    cors:{
        origin:"http://localhost:5173",
        methods:["GET","POST"],
    }
})

io.on("connection", (socket) => {
    console.log("User connected ", socket.id);

    socket.on("join_room",(data)=>{
      socket.join(data)
      console.log(`User with ID: ${socket.id} joined room: ${data}`);
    })


    socket.on("send_message",(data)=>{
      // console.log(data);
      socket.to(data.room).emit("receive_message",data)
    })
  
    socket.on("disconnect", () => {
      console.log("User disconnected ", socket.id);
    });
  });
  

app.use("/api/v1/users",userRoutes);


const PORT = process.env.PORT || 3000; // Define a default port if PORT is not set in .env

server.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});