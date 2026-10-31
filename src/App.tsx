import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return(
    <>
      <Navbar/>
      <main className="mx-auto max-w-5xl px-4 sm:px-6">
        <Home/>
        <About/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}

export default App
