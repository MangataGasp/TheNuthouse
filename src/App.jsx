import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ContactCTA from './components/ContactCTA'
import Products from './components/Products'
import About from './components/About'

export default function App() {
  return (
   <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <About />
        <ContactCTA />
      </main>
    </>
  )
}
