import React from 'react';
import { ResumenCompra } from '../Componentes/ResumenCompra';

export const TrackingPage = () => {
  return (
    <div>
      <h2 tabIndex={0} style={{fontSize: '26px', color: '#1D3E43', paddingLeft:'80px', paddingTop: '20px'}}>Su Factura</h2>
      <ResumenCompra titulo="Datos de la Orden"></ResumenCompra>
      <div style={{ textAlign: 'center',padding: '40px 0px'}}>
          <button style={{ background: '#1D3E43', color: '#E8D2A3', fontSize: '26px', width: '26%', padding: '13px 11px'}}>Descargar PDF</button>
          <div style={{ display: 'inline-block', width: '80px' }}></div> 
          <button style={{ background: '#1D3E43', color: '#E8D2A3', fontSize: '26px', width: '26%', padding: '13px 11px'}}>Descargar XML</button>
      </div>
    </div>
  );
}

