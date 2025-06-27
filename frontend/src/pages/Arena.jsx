import { Character } from '../components/Character'
import { Enemy } from '../components/Enemy'
import { Terminal } from '../components/Typing/Terminal'

export function Arena({ username }) {
  return (
    <>
    <div
        className="bg-white w-full h-screen flex items-center justify-center"
        style={{
          // backgroundImage: "url('arena.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
      <div className='flex justify-between w-[100vw] h-fit'>
        <Character />
        <Enemy />
      </div>
      <div className="absolute top-4 left-4 text-lg font-bold">
        {username && `Player: ${username}`}
      </div>
      <Terminal nombre_de_lettres={10} />

    </div>
    </>
  )
}