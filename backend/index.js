const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const app = express();
app.use(cors());

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
  socket.on('start_game', (room) => {
    console.log('Room créée :', room);
    socket.join(room);
  });
});

app.get('/', (req, res) => {
  res.send('Serveur Socket.IO opérationnel !');
});

const PORT = 3001;
server.listen(PORT, '0.0.0.0', () => console.log(`Backend en écoute sur http://localhost:${PORT}`));