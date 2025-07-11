import ProgressBar from "./ProgressBar.tsx"

function App() {
  const cartValue = 25

  return (
    <>
    <h3 className="text-center text-3xl text-[#002F6C] mt-5 font-sans">Ihr Warenkorb</h3>
      <div className="mt-5">
        <ProgressBar cartValue={cartValue}/>
        </div>
    </>
  )
}

export default App
