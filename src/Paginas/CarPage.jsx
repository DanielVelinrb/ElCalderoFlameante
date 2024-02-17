import React from 'react';
import { ResumenCompra } from '../Componentes/ResumenCompra';
import { FormularioEntrega } from '../Componentes/FormularioEntrega';
import { Mapa } from '../Componentes/Mapa';

export function CarPage() {

  return (
    <div>
      <ResumenCompra titulo="Su Orden" lineaDivisoria={true}></ResumenCompra> 
      <Mapa titulo="Dirección de Entrega"></Mapa>
      <FormularioEntrega></FormularioEntrega>
    </div>
  );
}
