import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationMenu.css'

export const NavigationMenu = () => {
    return (
        <nav className="navbar">
          <Link to="/" className="logo">
            <img src="./Imagenes/logo.png" alt="Logo" height="120" />
          </Link>
          <div className="menu-items">
            <Link to="/"><u>MENÚ</u></Link>
            <Link to="/">CONTACTO</Link>
            <Link to="/CarPage">
              <img src="../../Imagenes/shoppingCartIcon.png" alt="Icono Carrito" height="40" />
            </Link>
            <Link to="/">
              <img src="../../Imagenes/userIcon.png" alt="Icono Usuario" height="40" />
            </Link>
          </div>
        </nav>
      );
    }

