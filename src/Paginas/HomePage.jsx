import { SeccionComida } from '../Componentes/SeccionComida';
import '../styles.css'

export const HomePage = () => {
  return (
    <div>
        <img src="./Imagenes/banner.png" alt="banner descripcion" width="100%" height="auto"/>
        <nav className="navbarFood">
          <div className="menu-itemsFood"><a href="#nachos">Nachos</a></div>
          <div className="menu-itemsFood"><a href="#papas">Papas</a></div>
          <div className="menu-itemsFood"><a href="#alitas">Alitas</a></div>
          <div className="menu-itemsFood"><a href="#hamburguesas">Hamburguesas</a></div>
          <div className="menu-itemsFood"><a href="#bebidas">Bebidas</a></div>

        </nav>
        <SeccionComida></SeccionComida>
    </div>
  );
}

