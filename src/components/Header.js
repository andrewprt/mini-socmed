import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../styles/Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Link to="/friends"> Friends</Link>
            </div>
        );
    }
}

export default Header;