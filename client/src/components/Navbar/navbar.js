import React from 'react'
import './navbar.css'
import {BrowserRouter as Router, Link} from 'react-router-dom';


function NavBar() {
    return(
            <header>
                <Link class="logoContainer" to="/">
                    <h1 class="logo">Developed by <span class="name">Vegas Cruz</span></h1>
                </Link>
                <nav class="navBar">               
                    <ul>
                        <li>
                            <Link to="/"  className='links'>Home</Link>
                        </li>
                        <li>
                            <Link to="/about"  className='links'>About</Link>
                        </li>
                        <li>
                            <Link to="/contact"  className='links'>Contact</Link>
                        </li>
                        <li>
                            <Link to="/mywork"  className='links'>My Work</Link>
                        </li>
                        <li>
                            <Link to="/resume" className='links'>Resume</Link>
                        </li>
                        <li>
                            <Link to="/signin" className='links'>Sign In</Link>
                        </li>
                    </ul>
                </nav> 
            </header>
    );
}

export default NavBar;