import './App.css'
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
      <main>
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
