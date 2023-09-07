import React from 'react'
import { Link } from 'react-router-dom';
import HeadBanner from './HeadBanner';

function NavBar() {
    return (
        <div className='navbar-container'>
            <HeadBanner />
        <div className='navbar'>
            <div className='nav-Link'>
                <Link to='/' className='link'>Home</Link>
                <Link to='/about' className='link'>About</Link>
                <Link to='/' className='link'>Contact</Link>
            </div>
            <div>
                <button className='side-login-button'>Login</button>
            </div>
        </div>
        </div>
    )
}

export default NavBar
