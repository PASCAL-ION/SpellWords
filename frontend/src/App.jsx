import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import StatPage from './pages/stats';
import { Home } from './pages/Home';
import { Layout } from './components/Layout';
import { useEffect, useState } from 'react'

function App() {

  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="stats" element={<StatPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
      {/* <Arena username={username} /> */}
    </>
  )
}

export default App