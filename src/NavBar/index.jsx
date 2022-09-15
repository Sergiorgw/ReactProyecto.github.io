import React from "react";
import CartWidget from "../cartWidget";
import { NavLink } from "react-router-dom";


export const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" href="https://getbootstrap.com/docs/5.2/components/navbar/">Mi Marca</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/categoria/tools">tools</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/categoria/models">models</NavLink>
                        </li>
                        <li className="nav-item" to="cart">
                            <NavLink className="nav-link">
                                <CartWidget />
                            </NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;