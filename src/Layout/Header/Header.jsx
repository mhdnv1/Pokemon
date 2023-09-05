import React from 'react';
import logo from '../../asets/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <Link to={'/'}><img src={logo} alt="" /></Link>
                </nav>
            </div>

        </header>
    );
}

export default Header;
