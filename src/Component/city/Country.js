import React, { Component } from 'react';


class Country extends Component {
  constructor(props) {
    super()
  }
  render(props) {
    return (
      <div className="city">
        <img className="city-img" src={this.props.img} />
        <div className="city-legend">
          <h3 className="city-name">{this.props.name}</h3>
          <a href="#" className="city-link">see opening</a>
        </div>
      </div>

    );
  }

}
export default Country;