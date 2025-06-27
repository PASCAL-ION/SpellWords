import './App.css'
// import { Character } from './components/Character'
// import { Enemy } from './components/Enemy'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import StatPage from './pages/stats';
import { Layout } from './components/Layout';
import { useEffect, useState } from 'react'
// import { Arena } from './pages/Arena'

function App() {
  const [username, setUsername] = useState('');
  const [inGame, setInGame] = useState(false);

  useEffect(() => {
    document.title = inGame ? 'Arena' : 'Login'
  }, [inGame])

  if (!inGame) {
    return (
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
          onClick={() => setInGame(true)}
        >
          Start Game
        </button>
      </div>
    )
  }

  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="stats" element={<StatPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
      {/* <Arena username={username} /> */}
    </>
  )
}

export default App