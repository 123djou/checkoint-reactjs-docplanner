
import React, { Component } from 'react';
import Item from './Item'

const Acheivement = () => {

  return (

    <section className="acheivment-section">

      <div className="left-grid">

        <h3 className="section-title">The world's <br />biggest healthcare platform</h3><br />
        <p className="acheivement-info">
          We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
      </div>
      <div className="right-grid">
        <div className="offset-grid">


          <Item
            icon="https://www.docplanner.com/img/flag.png"
            number="Leader in 8 countries"
            txt="Poland, Turkey, Spain, Italy, Mexico, Brazil, Argentina and Chile"
          />

          <Item
            icon="https://www.docplanner.com/img/patients.png"
            number="20 million unique patients"
            txt="visit us every month"
          />
        </div>
        <div className="top-grid">

          <Item
            icon="https://www.docplanner.com/img/visits.png"
            number="600 000 appointments"
            txt="booked last month"
          />
          <Item
            icon="https://www.docplanner.com/img/doctors.png"
            number="35 000 active doctors"
            txt="trust in our solutions"
          />
        </div>
      </div>
    </section>


  );


}
export default Acheivement;