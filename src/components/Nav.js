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
            <h3>Logo</h3>
            <ul className={style.navLinks}>
                <Link style={styleLink} to="/about" >
                    <li>About</li>
                </Link>
                <Link style={styleLink} to="/shop">
                    <li>Shop</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;