import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'

function App() {

  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
