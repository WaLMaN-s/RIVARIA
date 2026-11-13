import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Portfolio from './sections/Portfolio'
import WhyChooseUs from './sections/WhyChooseUs'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Lewati ke konten utama
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
