const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const { PrismaClient } = require("./generated/prisma");
const prisma = new PrismaClient();

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "https://10.68.246.252:5173"],
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  const users = [];
  const rooms = [];
  socket.on("new_user", (data) => {
    console.log(data.name);
    users.push(data.name);
    console.log(users);
  });

  socket.on("start_game", (data) => {
    if (data.room) {
      rooms.some((element) => {
        if (element.idRoom === room && element.player2 === null) {
          element.player2 = data.name;
          socket.join(element.idRoom);
          io.to(element.idRoom).emit("start_game", {
            room: element.idRoom,
            player1: element.player1,
            player2: element.player2,
          });
          console.log("Room créée :", element);
          return true;
        }
      });
    } else if (!data.room) {
      rooms.some((element) => {
        if (element.player2 === null) {
          element.player2 = data.name;
          socket.join(element.idRoom);
          io.to(element.idRoom).emit("start_game", {
            room: element.idRoom,
            player1: element.player1,
            player2: element.player2,
          });
          console.log("Room rejointe :", element);
          return true;
        } else {
          const newRoom = rooms.length + 1;
          rooms.push({ idRoom: newRoom, player1: data.name, player2: null });
          socket.join(newRoom);
          io.to(room).emit("start_game", {
            room: newRoom,
            player1: data.name,
            player2: null,
          });
          console.log("Room créée :", {
            room: newRoom,
            player1: data.name,
            player2: null,
          });
        }
      });
    }
  });
});

app.get("/", (req, res) => {
  res.send("Serveur Socket.IO opérationnel !");
});

app.get("/stats", async (req, res) => {
  const stats = await prisma.GeneralStats.findMany();
  console.log(stats);
  res.json(stats);
});

const PORT = 3001;
server.listen(PORT, "0.0.0.0", () =>
  console.log(`Backend en écoute sur http://localhost:${PORT}`)
);
