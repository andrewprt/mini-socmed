import React, { Component } from 'react'
import '../styles/Footer.css';

//logo can be clicked to go to homepage
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer--text">
                    Copyright © 2019 Andrew Prawira
            </div>
            </div>
        );
    }
}

export default Footer;