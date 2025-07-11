import ProgressBar from "./ProgressBar.tsx"

function App() {
  const cartValue = 100

  return (
    <>
      <div className="mt-5">
        <ProgressBar cartValue={cartValue}/>
        </div>
    </>
  )
}

export default App
