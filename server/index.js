const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const userRoutes = require("./routes/userRoute");

require("dotenv").config();
require("./db/db");

app.use(express.json());
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("User connected ", socket.id);

  socket.on("send_message", (data) => {
    console.log("Message received: ", data);
    // Broadcast the received message to all connected clients
    io.emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected ", socket.id);
  });
});

app.use("/api/v1/users", userRoutes);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
