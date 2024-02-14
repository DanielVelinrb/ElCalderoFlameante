import data from '../Data/seccionesComida.json';

export const SeccionComida = () => {
    return (
      <div>
      {data.secciones.map((seccion) => (
        <div id={seccion.id}>
          <img src={seccion.imagenSeccion} alt={seccion.nombre} width="100%" height="302px"/>
          <h2 style={{fontSize: '26px', color: '#1D3E43', paddingLeft: '80px'}}>{seccion.nombre}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', paddingBottom: '70px'}}>
          {seccion.productos.map((producto) => (
              <div key={producto.id} style={{ display: 'flex', width: '40%', margin: '10px', textAlign: 'left', 
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', borderRadius: '5px', overflow: 'hidden'}}>
                <img src={producto.imagenProducto} alt={producto.nombre} style={{ width: '200px', height: '200px', 
                    objectFit: 'cover' }} />
                <div style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', width: '60%' }}>
                  <h3 style={{ fontSize: '28px',marginTop: '-4px'}}> {producto.nombre} </h3>
                  <p style={{ 
                    fontSize: '20px',
                    marginTop: '-25px'}}>
                        {producto.descripcion}</p>
                  <p style={{ 
                    fontSize: '24px',
                    marginTop: '-20px',
                    textAlign: 'center'}}> US${producto.precio}</p>
                    <div style={{    display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-30px'}}>
                  <button 
                    style={{ 
                      padding: '10px', 
                      backgroundColor: '#1D3E43',
                      width: '60%',
                      textAlign: 'center',
                      color: '#E8D2A3', 
                      border: 'none', 
                      borderRadius: '5px', 
                      cursor: 'pointer',
                      fontSize: '16px'
                    }}
                  > Añadir al carrito <img src="../../../Imagenes/iconoBotonCarro.png" alt="pruebita" style={{height: '25px', marginBottom: '-8px', paddingLeft: '18px'}}/>
                  </button></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
      );
    }

