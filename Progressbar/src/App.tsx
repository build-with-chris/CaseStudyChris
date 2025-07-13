import ProgressBar from "./ProgressBar.tsx"
import { useState } from "react"



function App() {
  const [cartValue, setCartValue] = useState(0)

  function increase20(){
    setCartValue(prev => prev+20)
  }

  function increase50(){
    setCartValue(prev => prev+50)
  }

  return (
    <>
    <h3 className="text-center text-3xl text-[#002F6C] mt-5 font-sans">Ihr Warenkorb</h3>
      <div className="mt-5">
        <ProgressBar cartValue={cartValue}/>
      </div>
      <h2 className="text-xl font-bold p-5 text-center">{cartValue}</h2>
      <div className="flex justify-center gap-10">
        <button onClick={increase20} className="bg-sky-700 p-5 text-white rounded-lg">20€ hinzufügen</button>
        <button onClick={increase50} className="bg-sky-700 p-5 text-white rounded-lg">50€ hinzufügen</button>
      </div>
    </>
  )
}

export default App
