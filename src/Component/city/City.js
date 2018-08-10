
import React, { Component } from 'react';
import Country from './Country';

class City extends Component {

    constructor(props) {

        super()

    };
    render(props) {
        return (

            <section className="city-section">
                <div className="section-city-text">
                    <h3 className="section-title" align="center">Improve the lives of millions. Change yours forever</h3>
                    <p className="decription">More than 500 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba, our search for great talent never stops.
                
</p>
                </div>
                <div className="city-group">

                    {this.props.countryList.map(x => {

                        return (<Country img={x.img} name={x.name} />)

                    })}

                </div>

            </section>

        );
    }

}
export default City;