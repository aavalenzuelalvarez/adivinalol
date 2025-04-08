import { Champ } from "../types"

type ChampListProps = {
    listaChamp: Champ[]
}

export default function ChampList({listaChamp}:ChampListProps) {
    return (
        <>
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
