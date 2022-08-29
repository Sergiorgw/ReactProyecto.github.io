import React from "react";
import logo from "./images/logo3D.png";

const NavBar = () => {
    return (
        <div className="container">
            <ul className="nav d-flex align-items-center">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="https://www.google.com.ar/"><img src={logo} width="50" alt="Imagine 3D" /></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link_header" href="https://www.google.com.ar/">Decoración</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link_header" href="https://www.google.com.ar/">Arte</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link_header" href="https://www.google.com.ar/">Herramientas</a>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;