import { useEffect, useRef, useState } from "react"
import { Particle } from "./Particle"
import gsap from "gsap"

export const FireBall = () => {
  const [particles, setParticles] = useState([])
  const [Emiting, setEmiting] = useState(true)
  const FireBallRef = useRef(null)

  useEffect(() => {
    let count = 0
    let interval

    if (Emiting) {
      interval = setInterval(() => {
        setParticles(p => [
          ...p,
          { id: count, duration: 1.2 + Math.random() * 0.8 }
        ])
        count++
      }, 70)
    }
    
    return () => clearInterval(interval)
  }, [Emiting])

    useEffect(() => {
        gsap.fromTo(FireBallRef.current, {
            top: '70vh',
            left: '10vw',
            scale:1.5,
        }, {
            scale:1,
            top: '20vh',
            left: '90vw',
            duration: 2,
            ease: 'expo.in',
            onComplete: () => {
                setEmiting(false);
            }
        })
    }, []) 

  const handleParticleEnd = (id) => {
    setParticles(p => p.filter(part => part.id !== id))
  }

  return (
    <div ref={FireBallRef} className="z-5 absolute w-10 h-10 ">
      {particles.map(p => (
        <Particle
          key={p.id}
          duration={p.duration}
          onEnd={() => handleParticleEnd(p.id)}
          Explose={Emiting}
        />
      ))}
    </div>
  )
 
}