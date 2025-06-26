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
    origin: 'http://localhost:5173', // port de Vite
    methods: ['GET', 'POST']
  }
});

io.on('connection', (socket) => {
  console.log('Un utilisateur connecté : ' + socket.id);

  socket.on('message', (data) => {
    console.log(data);
    io.emit('message', data);
  });

  socket.on('disconnect', () => {
    console.log('Utilisateur déconnecté : ' + socket.id);
  });
});

app.get('/', (req, res) => {
  res.send('Serveur Socket.IO opérationnel !');
});

app.get('/stats', async (req, res) => {
  const stats = await prisma.stats.findMany();
  console.log(stats);
  res.json(stats)
})

const PORT = 3001;
server.listen(PORT, () => console.log(`Backend en écoute sur http://localhost:${PORT}`));
