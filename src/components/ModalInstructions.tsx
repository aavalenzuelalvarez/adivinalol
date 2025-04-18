type ModalInstructionsProps = {
  showModal: boolean
  toggleModal: () => void
}

export default function ModalInstructions({showModal,toggleModal}:ModalInstructionsProps) {
  return (
    <>
      {showModal?(
        <button className="fixed right-0 rounded bg-blue-500 cursor-pointer opacity-85 text-white" onClick={()=>{toggleModal()}}>
        Leer Instrucciones
      </button>
      ):<>
        <div className="modalInstructions fondoModal fixed w-full min-h-full flex justify-center top-0">
          <div className=" bg-white max-w-4xl not-md:w-90 h-auto rounded m-auto mt-5 overflow-hidden fixed top-20">
            <header className="grid grid-cols-3 p-4 w-full bg-blue-400 text-blue-50 items-center">
              <p className=" text-2xl font-bold col-span-2 ">Instrucciones</p>
              <button className="bg-blue-800 rounded cursor-pointer" 
              onClick={()=>{toggleModal()}}>Cerrar</button>
            </header>
            <div className=" m-auto pb-3 px-4 pl-7">
              <ol className=" list-decimal">
                <li>Escribe un seed que será tu tablero</li>
                <li>Presiona en generar tablero</li>
                <li>Copia el seed que creaste o díselo a tu compañero</li>
                <li>Pégalo en donde dice "Semilla Actual"</li>
                <li>El campeón principal va a cambiar a uno de la semilla que tú escogiste y tu tablero será el de tu compañero</li>
              </ol>
              <br />
              <p>Con esto ya están listos para jugar, la idea es hacer preguntas entre ustedes para adivinar el campeón de su compañero, puede ser cualquiera de todo el tablero</p>
            </div>
          </div>
        </div>
      </>}
    </>
  )
}
