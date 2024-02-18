import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationMenu.css'

export const NavigationMenu = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="Navegacion Principal">
          <Link to="/" className="logo">
            <img src="./Imagenes/logo.png" alt="El caldero flameante - fast food and grill" height="80" />
          </Link>
          <div className="menu-items">
            <Link to="/"><u>MENÚ</u></Link>
            <Link to="/">CONTACTO</Link>
            <Link to="/CarPage">
              <img src="../../Imagenes/shoppingCartIcon.png" alt="Ingresar al carrito de compra" height="40" />
            </Link>
            <Link to="/">
              <img src="../../Imagenes/userIcon.png" alt="Ingresar al perfil de usuario" height="40" />
            </Link>
          </div>
        </nav>
      );
    }

