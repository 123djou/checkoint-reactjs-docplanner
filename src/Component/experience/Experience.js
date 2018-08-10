
import React, { Component } from 'react';
import Link from './Link'
import Grid from './Grid'

class Experience extends Component {
  constructor(props) {
    super()
  }
  render(props) {

const List =()=>{
  return     (<select name="" id="" className="coutry-list">
  <option value="">choose country</option>
  <option value="">brazil</option>
  <option value="">australia</option>
  <option value="">uk</option>
  <option value="">usa</option>
</select>);
}


    return (

      <section className="experience-section">

        <div className="experience-title">

          <img src="https://www.docplanner.com/img/sygnet.png" width="40" height="40" />

          <h1 className="section-title">Making the healthcare experience more human</h1>

        </div>
        <div className="experience-description">
          <div className="text-description" >
            <p>
              We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere
      </p>
          </div>
          <div className="text-description">
            <p>

              We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients
      </p>
          </div>
        </div>
        <div className="grid">
      
<Grid 
className = "patient-grid"
for="For patients"  
find= "Find a doctor, book a visit and solve any health-related doubt"
list = {<List /> }
img= "https://www.docplanner.com/img/screen-marketplace@2x.png"
/>
<Grid
className = "doctor-grid"
for="For doctors"
find="Save time managing visits and cut no-shows by half"
list = ""
img="https://www.docplanner.com/img/screen-saas@2x.png"
/>

        </div>
        <div className="partner-list">
          <div className="experience-info">
            <h3 className="text-blue">
              We are a global company with local culture
      </h3>
          </div>

          <ul className="partner-menu">
            {this.props.link.map(x => {

              return (<Link img={x.img} txt={x.txt} />)

            })}
          </ul>
        </div>
        <div>
        </div>
      </section>

    );
  }
}
export default Experience