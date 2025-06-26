import './App.css'
import { Character } from './components/Character'
import { Enemy } from './components/Enemy'

function App() {
 
  

  return (
    <>
      <div className='flex justify-between w-[100vw] h-fit'>
        <Character />
        <Enemy />
      </div>
    </>
  )
}

export default App
