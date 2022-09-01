import React from "react";
import logo from "../images/logo3D.png"
import cart from "../images/cart.png"

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
                <li className="nav-item">
                    <a className="nav-link link_header" href="https://www.google.com.ar/">
                        <img src={cart} width="50" alt="carrito"></img>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;