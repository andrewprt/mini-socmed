import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../styles/Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Link to="/" className="header--link">Home</Link>
                <Link to="/friends" className="header--link">Friends</Link>
            </div>
        );
    }
}

export default Header;