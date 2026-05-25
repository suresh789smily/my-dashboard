import React from 'react';

function HeroSection() {

  return (

    <div
      id="home"
      className="hero"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1509391366360-2e959784a276')"
      }}
    >

      <div className="overlay">

        <h1>OUR SERVICES</h1>

        <p>
          Solar Power Plant, Thermal Power Plant,
          Biomass Gasifier, Wind Power
        </p>

        <button>Explore More</button>

      </div>

    </div>

  );
}

export default HeroSection;