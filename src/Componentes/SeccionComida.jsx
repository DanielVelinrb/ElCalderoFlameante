import data from '../Data/seccionesComida.json';
import FoodItem from './FoodItem';

export const SeccionComida = () => {
  return (
    <>
      {data.secciones.map((seccion) => (
        <seccion id={seccion.id} key={seccion.id} aria-label={`Seccion ${seccion.nombre}`} tabIndex={0} className='hv-100 '>
          {<img src={seccion.imagenSeccion} alt={seccion.nombre} width="100%" tabIndex={0} style={{ objectFit: "cover", minHeight: 300, display:'block'}} />}
          <h2 style={{ fontSize: '26px', color: '#1D3E43', paddingLeft: '40px' }} tabIndex={1}>{seccion.nombre}</h2>
          <div className="container overflow-hidden my-5">
            <div className='row g-5'>
              {seccion.productos.map((producto) => (
                <FoodItem key={producto.id} producto={producto} />
              ))}
            </div>
          </div>
          <hr style={{
            border: '5px solid #000',
            width: '100%',
            margin: 0
          }} />
        </seccion>
      ))}

    </>
  );
}

