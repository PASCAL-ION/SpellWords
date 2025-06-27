import { useEffect, useState } from "react"
import { Lettre } from "./Lettre"

export const Terminal = ({nombre_de_lettres}) => {

    const [lettres, setlettres] = useState([])
    const [index, setindex] = useState(0)
    const [spell, setspell] = useState('')

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [lettres])

    useEffect(() => {
        setspell(randomName())
    }, [])

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
        setspell(randomName())
    }

    const randomName = () => {
        const prefixes = ["abra", "zora", "igni", "obli",'mecha',"migna", "vela",'avada', "myst", "aqua", "drax", "lexo", "lumi", "necro", "pyro","luno", "aero", "soli", "fero", "glaci", "volti", "terra", "aero"]
        const middles = ["man", "tur", "zor", "ven", "rax", "lum", "nor", "sil", "dar", "ker", "tar", "mar", "nar", "par", "sar", "tar", "zar", "kor", "lor", "mor", "nor", "por", "ror", "tor", "vor","num","lum","dum"]
        const suffixes = ["on", "im", "um", "ar", "us", "ax", "is", "os", "et", "el", "or", "an", "en", "in", "on", "un", "al", "il", "ul","ko", "lo", "mo", "no", "po", "ro", "to", "vo"]

        const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)]
        const randomMiddle = middles[Math.floor(Math.random() * middles.length)]
        const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)]

        return `${randomPrefix}${randomMiddle}${randomSuffix}`
    }





  return (
    <>
        <p className="absolute top-0 left-0 m-10 text-8xl font-bold text-black z-100">{spell}</p>
        <div className='z-100 flex absolute bottom-20 right-20'>
        {Array.from({ length: nombre_de_lettres }, (_, index) => (
            <Lettre key={index} lettre={lettres[index]} />
        ))}
        </div>
    </>
  )
}
