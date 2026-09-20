import Hero from '../components/Hero'
import About from '../components/About'
// import Press from '../components/Press'
import Games from '../components/Games'
import CtaStrip from '../components/CtaStrip'
import Contact from '../components/Contact'

function Home() {
  return (
    <>
      <Hero />
      <About />
      {/* <Press /> */}
      <Games />
      <CtaStrip />
      <Contact />
    </>
  )
}

export default Home
