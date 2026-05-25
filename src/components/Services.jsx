import React from 'react';

function Services() {

  const services = [

    {
      title: "OPEN ACCESS",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276"
    },

    {
      title: "BATTERY STORAGE",
      image:
        "https://images.unsplash.com/photo-1497440001374-f26997328c1b"
    },

    {
      title: "ROOFTOP SOLAR",
      image:
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d"
    }

  ];

  return (

    <div id="services" className="services">

      {
        services.map((item, index) => (

          <div className="card" key={index}>

            <img src={item.image} alt="" />

            <h2>{item.title}</h2>

          </div>

        ))
      }

    </div>

  );
}

export default Services;