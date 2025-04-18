import { useEffect, useState } from 'react'
import seedrandom from 'seedrandom'
import { champs } from "../data/db"
import { Champ } from '../types';

export default function useChamp(){

  const [seed, setSeed] = useState("mi-semilla");

  const [showModal, setShowModal] = useState(Boolean(JSON.parse(localStorage.getItem("modal")||"false")))

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

  // Esta funcion genera un campeón aleatorio cada vez que genera un seed.
  // useMemo(()=>{
  //   setRandomChamp(listaChamp[Math.floor(Math.random() * (15))])
  // },[listaChamp])

  const grabChampFromList = ()=>{
    setRandomChamp(listaChamp[Math.floor(Math.random() * (15))])
  }

  const clickMultiplayer = (Champ:Champ)=>{
    const champButton = document.getElementById("button"+Champ.id)
    champButton?.classList.toggle("imgCross")
  }
  

  // const getNewRandomChamp = ()=>{
  //   setRandomChamp(listaChamp[Math.floor(Math.random() * (12))])
  // }

  const toggleModal = ()=>{
    if (showModal){
      setShowModal(false)
    }else{
      setShowModal(true)
      localStorage.setItem("modal","true")
    }
  }

  
  return {
    listaChamp,
    setSeed,
    randomChamp,
    clickMultiplayer,
    grabChampFromList,
    showModal,
    toggleModal,
  }
}
