import gsap from "gsap"
import { useEffect, useRef } from "react"

export const Particle = ({ duration, onEnd,Explose }) => {
    const particle = useRef(null)
    const randomX = Math.random() * 20 - 10
    const randomY = Math.random() * 20 - 10
    const dirX = Math.random() * (100 - 50) - 200
    const dirY = Math.random() * (20 - 10) + 50
    const randomIndex = Math.floor(Math.random() * 4) + 1;

    useEffect(() => {

        gsap.set(particle.current, {
            backgroundColor: 'yellow',
            x: randomX,
            y: randomY,
            rotate: -120,
        })

        gsap.to(particle.current, {
            opacity: 0,
            width: '90px',
            height: '90px',
            x: dirX,
            y: dirY ,
            backgroundColor: '#5e1f01',
            // backgroundColor: 'black',

            duration: duration,
            
            onComplete: () => {
                if (onEnd) onEnd()
            }
        })
    }, [])

    useEffect(() => {
        if(!Explose){
            gsap.to(particle.current, {
                x: Math.random() * 2000 - 1000,
                y: Math.random() * 2000 - 1000,
                rotate: Math.random() * 360,
            })
        }
    }, [Explose])
    

    return (
        <div ref={particle} className={`absolute rounded-full mix-blend-plus-lighter blur-[4px] w-10 h-10`}>
            <img className="mix-blend-plus-darker opacity-50" src={`/Sprite/Fire/${randomIndex}.png`} alt="" />
        </div>
    )
}