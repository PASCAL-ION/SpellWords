import { useEffect } from "react";
import {io} from "socket.io-client";

const socket = io("http://localhost:3001");

export function Login({ username, setUsername, onStart }) {
  const handleStart = () => {
    socket.emit('start_game', { username });
    onStart();
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen"
      style={{
        backgroundImage: "url('login_bg2.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-2xl mb-4">Enter your username</h1>
      <input
        className="border px-2 py-1 mb-4"
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="Username"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        disabled={!username}
        onClick={handleStart}
      >
        Start Game
      </button>
    </div>
  );
}