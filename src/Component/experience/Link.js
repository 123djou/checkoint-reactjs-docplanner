
import React, { Component } from 'react';

export default class Link extends Component {

    constructor() {
        super()
    }

    render(props) {
        return (

            <li className="partner-item">
                <a className="partner-item-name" href="#">
                    <img src={this.props.img} height="20" width="20" />
                    {this.props.txt}
                </a>
            </li>

        );

    }


}