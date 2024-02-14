import React from 'react';
import { ResumenCompra } from '../Componentes/ResumenCompra';

export function CarPage() {
  return (
    <div>
      <h2 style={{fontSize: '26px', color: '#1D3E43', paddingLeft: '80px'}}>Su orden</h2>
      <ResumenCompra></ResumenCompra> 
    </div>
  );
}

