import { useEffect, useMemo, useState } from 'react'
import seedrandom from 'seedrandom'
import { champs } from "../data/db"

export default function useChamp(){

  const [seed, setSeed] = useState("mi-semilla");

  const shuffleArray = (seed:string)=>{
    const rng = seedrandom(seed); 
    const shuffled = champs.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
  
  const [listaChamp, setListaChamp] = useState(shuffleArray("mi-semilla").slice(0, 15))
  
  const [randomChamp, setRandomChamp] = useState(listaChamp[Math.floor(Math.random() * (12))])
  
  useEffect(()=>{
    setListaChamp(shuffleArray(seed).slice(0,15))
  },[seed])

  useMemo(()=>{
    setRandomChamp(listaChamp[Math.floor(Math.random() * (15))])
  },[listaChamp])

  

  // const getNewRandomChamp = ()=>{
  //   setRandomChamp(listaChamp[Math.floor(Math.random() * (12))])
  // }

  
  return {
    listaChamp,
    setSeed,
    randomChamp,
  }
}
