import { Champ } from "../types"

type ChampProps = {
    randomChamp:Champ
}

export default function ChampCard({randomChamp}:ChampProps) {
  return (
    <>
        <div className="">
            <p>{randomChamp.id}</p>
            <img src={randomChamp.icon} alt="Icono del campeon principal" />
        </div>
    </>
  )
}
