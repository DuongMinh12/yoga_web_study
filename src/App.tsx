import { useState } from "react"
import Navbar from "./scences/navbar/navbar"


function App() {
  const [selectedPage, setSelectedPage] = useState<string>("Home")
  return (
    <div className="app bg-gray-20">
      <Navbar selectedPage={selectedPage}
        setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App
