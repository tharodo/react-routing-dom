import React from 'react';
import style from './nav.module.css'

function Nav() {
    return (
        <nav className={style.styleNav}>
            <h3>Logo</h3>
            <ul className={style.navLinks}>
                <li>About</li>
                <li>Shop</li>
            </ul>
        </nav>
    );
}

export default Nav;