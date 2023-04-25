import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Logo from '../../img/logo-henry-white-lg.png'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className='logo' >
                <Link to="/" className='henry'>
                    <img src={Logo} alt="img" />
                </Link>
            </div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <Link to="/recipes" >Recipes</Link>
                        <Link to="/recipes2" >Recipes2</Link>
                        <Link to="/create" >Create</Link>
                        <Link to="/about" >About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}