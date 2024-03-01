import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import { BrowserRouter } from "react-router-dom"
import Products from "./components/Products"
import blue from './assets/beers/blue1.png'
import gray from './assets/beers/gray1.png'
import black from './assets/beers/black1.png'


const products = [
  {
    img: blue,
    name: "Oakhaven IPA",
    price: "$12.99",
    style: "Classic"
  },
  {
    img: gray,
    name: "Oakhaven APA",
    price: "$16.99",
    style: "Strong"
  },
  {
    img: black,
    name: "Oakhaven BPA",
    price: "$9.99",
    style: "light"
  },
]

function App() {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-tertiary">
        <Navbar />
        <Hero />
        <About />
        <Products products={products}
        />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
