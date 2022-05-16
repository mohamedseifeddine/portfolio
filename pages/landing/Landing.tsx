import React from 'react'
import Topbar from 'components/Topbar/Topbar'
import About from 'components/About'
import Experiences from 'components/Experiences'
import Projects from 'components/Projects/Projects'
import Contact from 'components/Contact'
import Footer from 'components/footer'

const Landing = () => (
  <>
    <Topbar />
    <About />
    <Experiences />
    <Projects />
    <Contact />
    <Footer />
  </>
)
export default Landing
