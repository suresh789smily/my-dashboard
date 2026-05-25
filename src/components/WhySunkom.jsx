import React from 'react';

function WhySunkom() {

  const features = [

    {
      title: "PREMIUM QUALITY",
      desc: "Best quality solar products and durability."
    },

    {
      title: "FINANCING",
      desc: "Easy financing options for clients."
    },

    {
      title: "ASSURANCE",
      desc: "Warranty and support services."
    },

    {
      title: "LIFETIME SERVICE",
      desc: "25 years warranty and maintenance."
    }

  ];

  return (

    <div id="about" className="why">

      <h1>WHY SUNKOM ?</h1>

      <div className="why-container">

        {
          features.map((item, index) => (

            <div className="why-card" key={index}>

              <h2>{item.title}</h2>

              <p>{item.desc}</p>

            </div>

          ))
        }

      </div>

    </div>

  );
}

export default WhySunkom;