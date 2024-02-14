import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px 40px',
            backgroundColor: '#1D3E43',
            color: '#E8D2A3'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Link to="/" className="logo">
                <img src="./Imagenes/logo.png" alt="Logo" height="140" />
            </Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' , color: '#FFFFFF', fontSize: '22px'}}>
              <p style={{ margin: '5px 0' }}><img src="./Imagenes/phone.png" alt="Logo phone" height="40" style={{marginBottom: '-12px', paddingRight: '28px'}}/>096 413 586</p>
              <p style={{ margin: '5px 0' }}><img src="./Imagenes/email.png" alt="Logo email" height="40" style={{marginBottom: '-12px', paddingRight: '18px'}}/>elcalderoflameante@gmail.com</p>
              <p style={{ margin: '5px 0' }}><img src="./Imagenes/location.png" alt="Logo location" height="60" style={{marginBottom: '-18px', paddingRight: '30px'}}/>Alfredo Escudero s25-293 e Isinlivi, Quito, Ecuador</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'left', textAlign: 'left' , fontSize: '24px', paddingRight: '17%'}}>
              <p>Redes</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '10px'}}>
                <img src="./Imagenes/facebook.png" alt="Facebook" height="30"/>
                <img src="./Imagenes/instagram.png" alt="Instagram" height="30"/>
                <img src="./Imagenes/whatsapp.png" alt="Whatsapp" height="30"/>
                <img src="./Imagenes/tiktok.png" alt="Tiktok" height="30"/>
              </div>
            </div>
          </div>
    )
}

