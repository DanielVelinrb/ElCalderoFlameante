import data from '../Data/seccionesComida.json';
import FoodItem from './FoodItem';

export const SeccionComida = () => {
  return (
    <>
      {data.secciones.map((seccion) => (
        <seccion id={seccion.id} key={seccion.id} aria-label={`Seccion ${seccion.nombre}`} tabIndex={0}>
          {/* <img src={seccion.imagenSeccion} alt={seccion.nombre} width="100%" height="302px" tabIndex={0}/> */}
          <h2 style={{ fontSize: '26px', color: '#1D3E43', paddingLeft: '40px' }} tabIndex={1}>{seccion.nombre}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', paddingBottom: '70px' }}>
            {seccion.productos.map((producto) => (
              <FoodItem key={producto.id} producto={producto} />
            ))}
          </div>
          <hr style={{
            border: '1px solid #ddd', /* Puedes ajustar el estilo de la línea aquí */
            width: '100%',
            margin: '10px 0', /* Puedes ajustar el margen superior e inferior */
          }} />
        </seccion>
      ))}

    </>
  );
}

