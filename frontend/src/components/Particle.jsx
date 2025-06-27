import gsap from "gsap"
import { useEffect, useRef } from "react"

export const Particle = ({ duration, onEnd,Explose }) => {
    const particle = useRef(null)
    const randomX = Math.random() * 20 - 10
    const randomY = Math.random() * 20 - 10
    const dirX = Math.random() * (100 - 50) - 200
    const dirY = Math.random() * (20 - 10) + 50

    useEffect(() => {
        gsap.set(particle.current, {
            backgroundColor: 'yellow',
            x: randomX,
            y: randomY
        })

        gsap.to(particle.current, {
            opacity: 0,
            width: '90px',
            height: '90px',
            x: dirX,
            y: dirY ,
            backgroundColor: '#5e1f01',
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
            })
        }
    }, [Explose])
    

    return (
        <div ref={particle} className="absolute rounded-full mix-blend-plus-lighter blur-[3px] w-10 h-10"></div>
    )
}