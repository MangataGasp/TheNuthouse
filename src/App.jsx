import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ContactCTA from './components/ContactCTA'
import Products from './components/Products'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <ContactCTA />
      </main>
    </>
  )
}
