import ChampCard from "./ChampCard";
import useChamp from "../hooks/useChamp";
import SeedSearch from "./SeedSearch";
import ChampList from "./ChampList";

export default function Champ() {
  const { listaChamp, setSeed, randomChamp, clickMultiplayer, grabChampFromList } = useChamp()
  return (
    <>
      <SeedSearch 
        setSeed={setSeed}
        grabChampFromList={grabChampFromList}
      />

      <ChampCard
        randomChamp={randomChamp}
      />

      <ChampList
        listaChamp={listaChamp}
        clickMultiplayer={clickMultiplayer}
      />
    </>
  )
}
