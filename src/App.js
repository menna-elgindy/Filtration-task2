import './App.css';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Hero from './components/Hero';
import HowWeWork from './components/HowWeWork';
import Recipes from './components/Recipes';
import Testymonials from './components/Testymonials'

function App() {
  return (
    <>
      <Hero />
      <HowWeWork/>
      <About/>
      <Recipes/>
      <Testymonials />
      <ContactUs/>
    </>
  );
}

export default App;
