import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../logoHenry.png'

import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">
            <div>
                <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
            </div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/" style={{textDecoration: 'none'}}>Home</NavLink>
                        <NavLink to="/favs" style={{textDecoration: 'none'}}>Favoritas</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}