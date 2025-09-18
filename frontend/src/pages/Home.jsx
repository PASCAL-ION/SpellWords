import { useState, useEffect } from "react";
import { Arena } from "./Arena.jsx";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

export const Home = () => {
  const [username, setUsername] = useState("");
  const [inGame, setInGame] = useState(false);
  const [room, setRoom] = useState(null);


  const LaunchGame = () => {
    setInGame(true);
    socket.emit("start_game", { name: username, room: room });
  };

  useEffect(() => {
    document.title = inGame ? "Arena" : "Home";
  }, [inGame]);

  useEffect(() => {
    socket.on("start_game", (data) => {
      alert(data.idRoom);
    });
  }, [socket]);




  return (
    <>
      {inGame ? (
        <Arena username={username} />
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-2xl mb-4">Enter your username</h1>
          <label htmlFor="username" className="mb-1">Username</label>
          <input
            id = "username"
            className="border px-2 py-1 mb-4"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <label htmlFor="room">Room number (optional)</label>
          <input
            id = "room"
            className="border px-2 py-1 mb-4"
            type="number"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            placeholder="Room number"
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50 hover:cursor-pointer"
            disabled={!username}
            onClick={LaunchGame}
          >
            Start Game
          </button>
        </div>
      )}
    </>
  );
};
