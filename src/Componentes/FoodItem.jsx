// Producto.js

import React from 'react';

const FoodItem = ({ producto }) => {
  return (
    <div key={producto.id} className='col-sm-12 col-lg-6 ' >
      <div className='d-flex flex-column flex-lg-row product d-flex align-items-center' style={{
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', borderRadius: '5px', overflow: 'hidden'
      }}>
        <img src={producto.imagenProducto} alt={`Imagen: ${producto.nombre}`} className='product-imagen' tabIndex={0} />
        <div className='p-3 w-100'>
          <h3 className='h3' tabIndex={0} aria-label={`Nombre menu: 
        ${producto.nombre}`}> {producto.nombre} </h3>
          <p tabIndex={0} aria-label={`Descripcion del menu: 
          ${producto.descripcion}`}>
            {producto.descripcion}</p>
          <p style={{
            textAlign: 'center'
          }} tabIndex={0} aria-label={`Precio del menu: 
        ${producto.precio} dolares`}> <strong>US${producto.precio}</strong> </p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button
              style={{
                padding: '10px',
                backgroundColor: '#1D3E43',
                width: '70%',
                textAlign: 'center',
                color: '#E8D2A3',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            > Añadir al carrito <img src="../../../Imagenes/iconoBotonCarro.png" alt="" style={{ height: '25px', paddingLeft: '18px' }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
