import React from "react";
import CartWidget from "../cartWidget";

export const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="https://getbootstrap.com/docs/5.2/components/navbar/">Mi Marca</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="https://getbootstrap.com/docs/5.2/components/navbar/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://getbootstrap.com/docs/5.2/components/navbar/">Accesorios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://getbootstrap.com/docs/5.2/components/navbar/">Decoración</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                <CartWidget />
                            </a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;