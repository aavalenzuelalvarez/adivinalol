import ChampCard from "./ChampCard";
import useChamp from "../hooks/useChamp";
import SeedSearch from "./SeedSearch";
import ChampList from "./ChampList";
import ModalInstructions from "./ModalInstructions";

export default function Champ() {
  const { listaChamp, setSeed, randomChamp, clickMultiplayer, grabChampFromList, showModal, toggleModal } = useChamp()
  return (
    <>
      <ModalInstructions
        showModal = {showModal}
        toggleModal = {toggleModal}
      />
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
