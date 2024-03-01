import { SeccionComida } from '../Componentes/SeccionComida';
import '../styles.css'

export const HomePage = () => {
  return (
    <div >
      <div className="hero">
        <img src="./Imagenes/banner.png" alt="Imagen Banner: El caldero flameante descubre el sabor de la magia en cada mordida" className='banner' tabIndex={0} />
      </div>
      <nav className="navbarFood" role="navigation" aria-label="Menu de tipos de comida">
        <ul className="menu-itemsFood"><a href="#nachos">Nachos</a></ul>
        <ul className="menu-itemsFood"><a href="#papas">Papas</a></ul>
        <ul className="menu-itemsFood"><a href="#alitas">Alitas</a></ul>
        <ul className="menu-itemsFood"><a href="#hamburguesas">Hamburguesas</a></ul>
        <ul className="menu-itemsFood"><a href="#bebidas">Bebidas</a></ul>
      </nav>
      <SeccionComida></SeccionComida>
    </div>
  );
}

