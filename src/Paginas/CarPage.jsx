import React from 'react';
import { ResumenCompra } from '../Componentes/ResumenCompra';
import { FormularioEntrega } from '../Componentes/FormularioEntrega';
import { useNavigate } from 'react-router-dom';

export function CarPage() {
  let navigate = useNavigate();

  function handleClick() {
    navigate('/TrackingPage');
  }

  return (
    <div>
      <ResumenCompra titulo="Su Orden"></ResumenCompra> 
      <FormularioEntrega></FormularioEntrega>
      <div style={{ textAlign: 'center',paddingBottom: '40px'}}>
          <button onClick={handleClick} style={{ background: '#1D3E43', color: '#E8D2A3', fontSize: '26px', width: '26%', padding: '13px 11px'}}>Pagar</button>
      </div>
    </div>
  );
}

