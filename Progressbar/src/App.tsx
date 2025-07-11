import ProgressBar from "./ProgressBar.tsx"
import { useState } from "react"

function App() {
  const [cartValue, setCartValue] = useState(0)
  return (
    <>
    <h3 className="text-center text-3xl text-[#002F6C] mt-5 font-sans">Ihr Warenkorb</h3>
      <div className="mt-5">
        <ProgressBar cartValue={cartValue}/>
        </div>
        <h2>{cartValue}</h2>
    <div>
      <button />
      <button />
    </div>
    </>
  )
}

export default App
