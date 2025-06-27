import {useState, useEffect} from "react"
import { Arena } from './Arena.jsx'
import { io } from 'socket.io-client';

const socket = io('http://localhost:3001');

export const Home = () => {
  const [username, setUsername] = useState('');
  const [inGame, setInGame] = useState(false);

  const LaunchGame = () => {
    setInGame(true)
    socket.emit('new_user', {name : username})
  }
  

    useEffect(() => {
      document.title = inGame ? 'Arena' : 'Home'
    }, [inGame])
        
  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen">
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
            onClick={LaunchGame}
          >
            Start Game
          </button>
        </div>
    </>
  )
}
