import { useEffect, useState } from "react"
import { Lettre } from "./Lettre"

export const Terminal = ({nombre_de_lettres}) => {

    const [lettres, setlettres] = useState([])
    const [index, setindex] = useState(0)



    const handleKeyDown = (event) => {
        const key = event.key.toUpperCase()

        if(key == 'BACKSPACE'){
            if (index > 0) {
                setlettres((prev) => prev.slice(0, -1))
                setindex(index - 1)
            } 
            return
        }

        if(key == 'ENTER'){
            if (index > 0) {
                CastSpell();
            } 
            return
        }

        if (!/^[A-Z]$/.test(key)) {
            console.log("Touche non valide")
            return
        }

        if (index < nombre_de_lettres) {
            setlettres((prev) => [...prev, key])
            setindex(index + 1)
        } else {
            console.log("Nombre de lettres atteint")
            CastSpell();
        }
    }

    const CastSpell = () => {
        console.log("Spell casted with letters:", lettres.join(''))
        setindex(0)
        setlettres([])
    }

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [lettres])



  return (
    <div className='flex absolute bottom-20 right-20'>
      {Array.from({ length: nombre_de_lettres }, (_, index) => (
        <Lettre key={index} lettre={lettres[index]} />
      ))}
    </div>
  )
}
