import gsap from 'gsap'
import { useEffect } from 'react'

export const Character = () => {

    useEffect(() => {
      gsap.to('.hat', {
        y: 11,
        duration: 1,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      })

      gsap.to('.head, .corp', {
        y: 7,
        duration: 1,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      })

      gsap.to('.head', {
        y: 9,
        duration: 1,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      })

    }, [])
    

  return (
    <div className={`w-110 h-110 relative mt-70`}>
        <img src="/Sprite/Wizard/Back/Hat.png" alt="Enemy"        className='hat absolute z-10' />
        <img src="/Sprite/Wizard/Back/Head.png" alt="Enemy"       className='head absolute z-8' />
        <img src="/Sprite/Wizard/Back/Corp.png" alt="Enemy"       className='corp absolute z-9' />
    </div>
  )
}
