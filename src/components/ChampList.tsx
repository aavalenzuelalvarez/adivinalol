import { Champ } from "../types"

type ChampListProps = {
    listaChamp: Champ[],
    clickMultiplayer: (Champ: Champ) => void
}

export default function ChampList({listaChamp, clickMultiplayer}:ChampListProps) {
    return (
        <>
            <div className=" flex justify-center">
                <ul className="grid grid-cols-5 mt-5 max-md:grid-cols-3 gap-4 max-w-4xl">
                {listaChamp.map(champ =>(
                    <li className="mx-auto" key={champ.id}>
                        <button className="" onClick={()=>{clickMultiplayer(champ)}} id={"button"+champ.id}>
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
