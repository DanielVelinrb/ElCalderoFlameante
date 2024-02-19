import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer id="footer" style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '20px 40px',
      backgroundColor: '#1D3E43',
      color: '#E8D2A3'
    }} className='hero'>
      <div className="container">
        <div className='row'>
          <div className='col-md-4 col-sm-12 text-center'>
            <Link to="/" className="logo">
              <img src="./Imagenes/logo.png" alt="Logo caldero flameante" height="140" />
            </Link>
          </div>

          <div className='col-md-4 col-sm-12 footer-list'>
            <h1 tabIndex={0} className='h5 text-center gold-text'>Contacto</h1>
            <p tabIndex={0}>
              <i className="bi bi-telephone-fill" title='Teléfono'></i><span>096 413 586</span>
            </p>
            <p tabIndex={0}>
              <i className="bi bi-envelope-fill" title='Correo'></i>elcalderoflameante@gmail.com
            </p>
            <p tabIndex={0}>
              <i className="bi-geo-alt-fill" title='Ubicación'></i>Alfredo Escudero s25-293 e Isinlivi, Quito, Ecuador
            </p>
          </div>
          <div className='col-md-4 col-sm-12 d-flex flex-column' >
            <h1 tabIndex={0} className='h5 text-center'>Redes</h1>
            <div className='d-flex flex-grow-1 align-items-center' style={{ justifyContent: 'center', gap: '1em' }}>
              <img tabIndex={0} src="./Imagenes/facebook.png" alt="Facebook" height="30px" />
              <img tabIndex={0} src="./Imagenes/instagram.png" alt="Instagram" height="30px" />
              <img tabIndex={0} src="./Imagenes/whatsapp.png" alt="Whatsapp" height="30px" />
              <img tabIndex={0} src="./Imagenes/tiktok.png" alt="Tiktok" height="30px" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

