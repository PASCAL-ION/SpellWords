import { useEffect, useState } from 'react'
import { Arena } from './pages/Arena'
import { Login } from './pages/Login'

function App() {
  const [username, setUsername] = useState('');
  const [inGame, setInGame] = useState(false);

  useEffect(() => {
    document.title = inGame ? 'Arena' : 'Login'
  }, [inGame])

  if (!inGame) {
    return (
      <Login
        username={username}
        setUsername={setUsername}
        onStart={() => setInGame(true)}
      />
    )
  }

  return (
    <Arena username={username} />
  )
}

export default App