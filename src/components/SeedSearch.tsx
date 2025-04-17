import { useState } from "react"

type seedSearchProps={
  setSeed: React.Dispatch<React.SetStateAction<string>>,
  grabChampFromList: () => void
}

export default function SeedSearch({setSeed,grabChampFromList}:seedSearchProps) {
  const [seedInput, setSeedInput] = useState('')
  return (
    <>
      <div className=" grid gap-3 mt-3 max-w-4xl m-auto">
        <div className="grid grid-cols-3">
          <p className=" font-bold text-center text-2xl">Semilla actual: {''}
          </p>
          <input type="text" placeholder='mi-semilla'
              defaultValue={"mi-semilla"}
              className=" border-1 rounded text-2xl col-span-2"
              onChange={(e)=> setSeedInput(e.target.value)}
          />
        </div>
        <button className="bg-sky-600 rounded p-2 text-2xl text-white"
          onClick={()=>{setSeed(seedInput);grabChampFromList()}}
        >Generar Seed</button>
      </div>
    </>
  )
}
