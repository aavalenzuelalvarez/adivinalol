import ChampCard from "./ChampCard";
import useChamp from "../hooks/useChamp";
import SeedSearch from "./SeedSearch";
import ChampList from "./ChampList";

export default function Champ() {
  const { listaChamp, setSeed, randomChamp } = useChamp()
  return (
    <>
      <SeedSearch 
        setSeed={setSeed}
      />

      <ChampCard
        randomChamp={randomChamp}
      />

      <ChampList
        listaChamp={listaChamp}
      />
    </>
  )
}
