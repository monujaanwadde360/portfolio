import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ScrollProgress from "./components/ScrollProgress"

import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Achievements from "./pages/Achievements"
import Certifications from "./pages/Certifications"
import Contact from "./pages/Contact"

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <ScrollProgress />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Achievements />
      <Certifications />
      <Contact />
      <Footer />

    </>
  )
}

export default App