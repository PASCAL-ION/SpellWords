import gsap from "gsap";
import { useEffect, useMemo, useRef } from "react";

export const Lettre = ({lettre}) => {
    const randombool = useMemo(() => Math.random() < 0.5, []); // Ne change jamais après le premier rendu
    const lettreRef = useRef(null)
    const runeRef = useRef(null)


    useEffect(() => {
        gsap.set([lettreRef.current, runeRef.current], {
            y: 0,
            scale: 1,
        });
        gsap.from(lettreRef.current, {
            y: "100%",
            scale: 0,
            duration: 0.7,
            ease: "elastic.out(1)",
        });
        gsap.from(runeRef.current, {
            scale: 0.7,
            duration: 0.7,
            ease: "elastic.out(1)",
        });
      
    }, [lettre]);
    


  return (
    <div className="w-30 relative">
        <img ref={runeRef} src={randombool ? "/Sprite/rune/rune_1.png" : "/Sprite/rune/rune_2.png"} alt="Lettre" />
        <p ref={lettreRef} className="enchanted drop-shadow-[0_3.2px_3.2px_rgba(0,0,0,0.8)] text-8xl font-black text-white absolute top-[50%] left-[50%] w-20 h-20 text-center transform -translate-x-1/2 -translate-y-1/2 opacity-100">
            {lettre}
        </p>
    </div>
  )
}
