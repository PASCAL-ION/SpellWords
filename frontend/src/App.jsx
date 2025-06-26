import './App.css'
import { Character } from './components/Character'
import { Enemy } from './components/Enemy'
import { Terminal } from './components/Typing/Terminal'

function App() {
 
  return (
    <>
      <div className='flex justify-between w-[100vw] h-fit'>
        <Character />
        <Enemy />
      </div>
      <Terminal nombre_de_lettres={8} />
    </>
  )
}

export default App
