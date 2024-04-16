import { useState } from "react"
import Navbar from "./scences/navbar/navbar"
import { SelectedPage } from "@/scences/shared/types"

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  return (
    <div className="app bg-gray-20">
      <Navbar selectedPage={selectedPage}
        setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App
