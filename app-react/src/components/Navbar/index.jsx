import React from "react";
import CartWidget from "../CartWidget";
import "./styles.css";
import {Link} from 'react-router-dom';




const NavBar = () => {



    return (
        <>
 <ul className="navbar-fondo">
            <li>
                <Link to="/">Menu principal</Link>
            </li>
            <li>
                <Link to="/category/PlanPersonalizado">Planes personalizados
                </Link>
            </li>
            <li>
                <Link to="/category/Recomposicion">Recomposicion corporal
                </Link>
            </li>
            <li>
                <Link to="/category/Fuerza-hip">Fuerza e hipertrofia </Link>
            </li>
            <li>
                <Link to="/category/FuerzaPura"> Fuerza Pura</Link>
            </li>
            
            <Link to="/cart">
                <CartWidget>
            
                </CartWidget>
            </Link>
          
     
        </ul>
       
        </>
    );
};

export default NavBar;