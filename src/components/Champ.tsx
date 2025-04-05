import { useState } from "react"
import { champs } from "../data/db"
import seedrandom from 'seedrandom'
import ChampCard from "./ChampCard";
import SeedSearch from "./SeedSearch";

function shuffleArray<T>(array: T[], seed: string): T[] {
  const rng = seedrandom(seed); 
  const shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function Champ() {
  const [listaChamp, setListaChamp] = useState(() => shuffleArray(champs, "mi-semilla").slice(0, 12))
  const [seed, setSeed] = useState("mi-semilla");
  const [randomChamp, setRandomChamp] = useState(listaChamp[Math.floor(Math.random() * (12))])

  const getNewPoll = ()=>{
    setListaChamp(shuffleArray(champs, seed).slice(0,12))
  }

  const getRandomChamp = ()=>{
    console.log(randomChamp.id)
  }

  return (
    <>
      <div className=" grid gap-3 mt-3 max-w-4xl m-auto">
        <div className="grid grid-cols-3">
          <p className=" font-bold text-center text-2xl">Semilla actual: {''}
          </p>
          <input type="text" placeholder='mi-semilla' 
              onChange={e=>{setSeed(e.currentTarget.value)}}
              defaultValue={"mi-semilla"}
              className=" border-1 rounded text-2xl col-span-2"
          />
        </div>
        <button className="bg-sky-600 rounded p-2 text-2xl text-white" onClick={getNewPoll}>Generar Seed</button>
      </div>

      <ChampCard
        randomChamp={randomChamp}
      />

      <div className="max-w-4xl mx-auto">
        <ul className="grid grid-cols-5 mt-5 max-md:grid-cols-3">
          {listaChamp.map(champ =>(
            <li className="mx-auto" key={champ.id}>
              <button>
                <img src={champ.icon} alt={champ.id + ' icono'} 
                  className="
                  hover:opacity-90 hover:cursor-pointer
                  "
                />
                <p className="text-center capitalize">{champ.id}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
