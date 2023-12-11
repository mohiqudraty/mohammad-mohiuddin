
import Banner from './Components/Banner'
import Contact from './Components/Contact'
import Education from './Components/Education'
import Experience from './Components/Experience'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
function App() {


  return (
    <>
 <div className='container mx-auto'>
  <Banner></Banner>
  <NavBar></NavBar>
  <Skills></Skills>
  <Experience></Experience>
  <Projects></Projects>
  <Education></Education>
  <Contact></Contact>
  <Footer></Footer>
 </div>
    </>
  )
}

export default App
