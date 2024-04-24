import { useEffect, useState } from "react"
import Navbar from "./scences/navbar/navbar"
import { SelectedPage } from "@/scences/shared/types"
import Home from "./scences/home/home";
import Benefits from "@/scences/benefits/benefits";
import OurClasses from "./scences/ourClasses/ourClasses";
import ContactUs from "./scences/contactUs/contactUs";
import Footer from "./scences/footer/footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="app bg-gray-20">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage}
        setSelectedPage={setSelectedPage} />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSetlectedPage={setSelectedPage} />
      <Footer />
    </div>
  )
}

export default App
