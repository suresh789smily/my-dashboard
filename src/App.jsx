import './App.css';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import WhySunkom from './components/WhySunkom';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <div>

      <Navbar />
      <HeroSection />
      <Services />
      <WhySunkom />
      <Certificates />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;