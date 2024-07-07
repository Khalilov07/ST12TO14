import React from 'react';
import './header.css'

import { Link } from 'react-router-dom';

const Header = () => {


    // стилизуйте header на свой вкус
    // почитайте про react-router-dom

    return (
        <header className='header'>
            <div className="container">
                <nav className='nav'>
                    <ul className='header__links'>
                        <li>
                            <Link className='header__link' to="/">Home</Link>
                        </li>
                        <li>
                            <Link className='header__link' to="/about">About</Link>
                        </li>
                        <li>
                            <Link className='header__link' to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;