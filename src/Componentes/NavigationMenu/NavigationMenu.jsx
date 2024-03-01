import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationMenu.css'


export const NavigationMenu = () => {
  return (
    <nav className="navbar blue-bg d-flex flex-md-row flex-sm-column justify-content-sm-center  justify-content-md-between " role="navigation" aria-label="Navegacion Principal">
      <Link to="/" className="logo">
        <img src="./Imagenes/logo.png" alt="El caldero flameante - fast food and grill" height="80" className='text-sm-center'/>
      </Link>
      <div className="menu-items d-flex  flex-sm-column flex-md-row">
        <Link to="/"><u>MENÚ</u></Link>
        <a href="#footer">CONTACTO</a>
        <Link to="/CarPage">
          <img src="../../Imagenes/shoppingCartIcon.png" alt="Ingresar al carrito de compra" height="40" />
        </Link>

      </div>
    </nav>
  );
}

