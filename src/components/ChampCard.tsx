import { Champ } from "../types"

type ChampCardProps = {
    randomChamp:Champ
}

export default function ChampCard({randomChamp}:ChampCardProps) {
  return (
    <>
        <div 
        className="
          grid 
          grid-cols-5 
          grid-rows-1
          max-w-2xl 
          gap-1
          m-auto
          bg-blue-500
          p-2
          mt-5
        "
        >
        <img src={randomChamp.icon} alt="Icono del campeon principal" className="" />
        
        <div className="col-span-4 text-center">
          <p className=" capitalize">{randomChamp.id} - {randomChamp.title}</p>
          <p className="text-amber-300">{randomChamp.tags.toString()}</p>
          <p>{randomChamp.description}</p>
        </div>
      </div>
    </>
  )
}
