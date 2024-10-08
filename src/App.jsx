import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"

const App = () => {

  return (
    <>
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <Hero className="flex-grow"/>
      <Highlights/>
    </div>
    </>
  )
}

export default App
