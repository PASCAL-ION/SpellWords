const express = require('express');
const http = require('http');
const cors = require('cors');
const { PrismaClient } = require('./generated/prisma');
const bcrypt = require('bcrypt');
const { Server } = require('socket.io');

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

app.post('/api/users', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Name, email, and password are required.' });
  }

  try {
    // It's crucial to hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    // Don't send the password back in the response
    const { password: _, ...userWithoutPassword } = newUser;
    res.status(201).json(userWithoutPassword);

  } catch (error) {
    // Prisma error code for unique constraint violation
    if (error.code === 'P2002') {
      const target = error.meta?.target || 'field';
      return res.status(409).json({ error: `A user with this ${target} already exists.` });
    }

    console.error('Failed to create user:', error);
    res.status(500).json({ error: 'An unexpected error occurred.' });
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

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => console.log(`Backend en écoute sur http://localhost:${PORT}`));
