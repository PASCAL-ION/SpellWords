const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: [
      'http://localhost:5173',
      'https://10.68.246.252:5173',
    ],
    methods: ['GET', 'POST']
  }
});

io.on('connection', (socket) => {
  const users = []

  socket.on('new_user', (data) => {
    console.log(data.name)
    users.push(data.name)
    console.log(users)
  })

  socket.on('start_game', (data) => {
    console.log('Start game demandé par :', data.username);
    // logique de matchmaking ici
  });
});

app.get('/', (req, res) => {
  res.send('Serveur Socket.IO opérationnel !');
});

app.get('/stats', async (req, res) => {
  const stats = await prisma.GeneralStats.findMany();
  console.log(stats);
  res.json(stats)
})

const PORT = 3001;
server.listen(PORT, '0.0.0.0', () => console.log(`Backend en écoute sur http://localhost:${PORT}`));