import React from 'react';
import style from './nav.module.css'
import { Link } from 'react-router-dom'

function Nav() {

    const styleLink = {
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'bold'
    }

    return (
        <nav className={style.styleNav}>
            <h3>
                <Link style={styleLink} to="/">
                    Logo
                </Link>
            </h3>
            <ul className={style.navLinks}>
                <Link style={styleLink} to="/about" >
                    <li className={style.navDetail}>About</li>
                </Link>
                <Link style={styleLink} to="/shop">
                    <li className={style.navDetail}>Shop</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;