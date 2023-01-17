import React from "react";
import CartWidget from "../CartWidget";




const NavBar = () => {


    return (
        <>
        <nav id="navbar" class="navbar navbar-expand-lg navbar-light" style="background-color: #fcfcfe;">
            <div class="container-fluid">

                <a class="navbar-brand" href="/index.html">FullPower</a>

                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">

                        <li class="nav-item">
                            <div class="contacto">
                                <a class="nav-link" href="/index.html">Menu Principal</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">Servicios</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">Online-coaching-Personalizado</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">Transformaciones</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">Mi cuenta</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">
                                <CartWidget />
                                </a>
                        </li>

                    </ul>
                </div>
            </div>

        </nav>
        </>
    )
}
export default NavBar