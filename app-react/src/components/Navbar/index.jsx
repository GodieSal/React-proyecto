import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";




const NavBar = () => {


    return (
        <>
        <ul className="navbar-fondo">
            <li>
            <NavLink className ="nav_link" to="/">Menu principal</NavLink>
            </li>
            <li>
            <NavLink className ="nav_link" to="/category/Servicios">Servicios
                </NavLink>
            </li>
            <li>
            <NavLink className ="nav_link" to="/category/Online-coaching">Online-coaching-personalizado
                </NavLink>
            </li>
            <li>
            <NavLink className ="nav_link" to="/category/Transformaciones">Transformaciones</NavLink>
            </li>
            <li>
            <NavLink className ="nav_link" to="/category/Cuenta">Mi cuenta</NavLink>
            </li>
            <li>
                <NavLink className ="nav_link" to="Cart"> 
                <CartWidget> 
                </NavLink>
            </li>
            
            <Link to="">
                <CartWidget>
            
                </CartWidget>
            </Link>
          
     
        </ul>
       
        </>
    );
};
export default NavBar