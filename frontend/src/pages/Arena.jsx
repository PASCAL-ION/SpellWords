import { Character } from '../components/Character'
import { Enemy } from '../components/Enemy'
import { FireBall } from '../components/FireBall'
import { Terminal } from '../components/Typing/Terminal'

export function Arena({ username }) {
  return (
    <div className='relative'>
      <div className='flex justify-between w-[100vw] h-fit'>
        <Character />
        <Enemy />
      </div>
      <div className="absolute top-4 left-4 text-lg font-bold">
        {username && `Player: ${username}`}
      </div>
      <Terminal nombre_de_lettres={10} />
      <div className='background w-[110vw] h-[110vh] absolute -top-[5vh] -left-[5vw] z-[-1] bg-black'>
        <img src="/arena.jpg" alt="Arena Background" className='w-full h-full object-cover bg-no-repeat blur-[1px] opacity-90' draggable={false} />
      </div>
      {/* <FireBall/> */}

    </div>
  )
}