import React from "react";
import CartWidget from "../cartWidget";

export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav__brand">
                    <a className="nav__link" href="empty">Mi Marca</a>
                </div>
                <ul className="nav__list">
                    <li>
                        <a className="nav__link" href="empty">Cat1</a>
                    </li>
                    <li>
                        <a className="nav__link" href="empty">Cat2</a>
                    </li>
                    <li>
                        <a className="nav__link" href="empty">
                            <CartWidget />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;