import gsap from 'gsap'
import { useEffect } from 'react'

export const Enemy = () => {
    useEffect(() => {

      gsap.to('.hat, .fond-hat', {
        y: 11,
        duration: 1,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      })

      gsap.to('.head, .corp, .fond-corp', {
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
    <div className='w-80 h-80 relative mt-10 mr-10'>
        <img src="/Sprite/Wizard/Front/Hat.png" alt="Enemy"        className='hat absolute z-10'      draggable={false}/>
        <img src="/Sprite/Wizard/Front/Head.png" alt="Enemy"       className='head absolute z-8'      draggable={false}/>
        <img src="/Sprite/Wizard/Front/Corp.png" alt="Enemy"       className='corp absolute z-9'      draggable={false}/>
        <img src="/Sprite/Wizard/Front/Fond_Corp.png" alt="Enemy"  className='fond-corp absolute z-7' draggable={false}/>
        <img src="/Sprite/Wizard/Front/Fond_Hat.png" alt="Enemy"   className='fond-hat absolute z-7'  draggable={false}/>
    </div>
  )
}
