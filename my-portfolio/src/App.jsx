
import Banner from './Components/Banner'
import Contact from './Components/Contact'
import Education from './Components/Education'
import Experience from './Components/Experience'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Toaster } from 'react-hot-toast';
// ..
AOS.init();
function App() {

  return (
    <>
 <div className="container mx-auto px-5 bg-gray-200">
  <Banner></Banner>
  <NavBar></NavBar>
  <Skills></Skills>
  <Experience></Experience>
  <Projects></Projects>
  <Education></Education>
  <Contact></Contact>
  <Footer></Footer>
  <Toaster />
 </div>
    </>
  )
}

export default App
