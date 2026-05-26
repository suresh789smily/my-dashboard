import './App.css';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import WhySunkom from './components/WhySunkom';
import Certificates from './components/Certificates';
import DailyUpdates from './components/DailyUpdates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (

    <div>

      {/* Navbar */}

      <Navbar />

      {/* Hero Section */}

      <HeroSection />

      {/* Services */}

      <Services />

      {/* Why Sunkom */}

      <WhySunkom />

      {/* Certificates */}

      <Certificates />

      {/* Daily Updates Application */}

      <DailyUpdates />

      {/* Contact */}

      <Contact />

      {/* Footer */}

      <Footer />

    </div>

  );
}

export default App;