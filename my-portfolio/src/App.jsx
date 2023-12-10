
import './App.css'
import About from './Sections/About'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'
import Header from './Sections/Header'
import Projects from './Sections/Projects'
import Skills from './Sections/Skills'
function App() {


  return (
    <>
      <h1 className="text-3xl font-bold font-inter underline">
      Hello world!
    </h1>
  <Header></Header>
  <About></About>
  <Contact></Contact>
  <Skills></Skills>
  <Projects></Projects>
  <Footer></Footer>
    </>
  )
}

export default App
