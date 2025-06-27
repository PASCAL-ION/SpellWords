import './App.css'
// import { Character } from './components/Character'
// import { Enemy } from './components/Enemy'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import StatPage from './pages/stats';
import { Layout } from './components/Layout';

function App() {
 
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="stats" element={<StatPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
