import gsap from "gsap"
import { useEffect, useRef } from "react"

export const Shield = ({duration}) => {
    const leftRef = useRef(null)
    const rightRef = useRef(null)

    useEffect(() => {
        gsap.set([leftRef.current, rightRef.current], {
            x: 0,
            rotate: 0,
            scale: 1,
        });
        gsap.set(leftRef.current, {x:-400,rotate:100})
        gsap.set(rightRef.current,{x:400,rotate:-100})

        gsap.from([leftRef.current, rightRef.current], {
            scale: 0,
            duration: 0.8,
            ease: 'elastic.inOut',
            onComplete: () => {
                gsap.fromTo(
                    leftRef.current,
                    { x: -400, rotate: 100 },
                    { x: 0, rotate: 0, duration: 1, ease: 'expo.inOut' }
                );
                gsap.fromTo(
                    rightRef.current,
                    { x: 400, rotate: -100 },
                    { x: 0, rotate: 0, duration: 1, ease: 'expo.inOut' }
                );
            },
        });

        setTimeout(() => {
             gsap.fromTo(
                    [leftRef.current,rightRef.current],
                    { opacity:1 },
                    {opacity:0, ease: 'expo.inOut' }
                );
            
        }, (duration*1000));

    }, []);
    
  return (
    <div className="absolute z-10000 w-80 h-80 left-0 bottom-0">
        <img ref={leftRef} className="absolute top-0 left-0" src='/Sprite/Shield/Left.png' alt='partie gauche du bouclier'/>
        <img ref={rightRef} className="absolute top-0 left-0" src='/Sprite/Shield/Right.png' alt='partie droite du bouclier'/>
    </div>
  )
}
