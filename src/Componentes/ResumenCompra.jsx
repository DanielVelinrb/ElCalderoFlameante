import productos from '../Data/listaProductosCompra.json';


export const ResumenCompra = (props) => {

    return (
<div style={{padding: '20px 80px'}}>
<h2 tabIndex={0} style={{fontSize: '26px', color: '#1D3E43'}}>{props.titulo}</h2>
  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
    <thead>
      <tr>
        <th style={{ width: '20%', textAlign: 'center' }}></th>
        <th tabIndex={0} style={{ width: '30%', textAlign: 'left' }}>Item</th>
        <th tabIndex={0} style={{ width: '10%', textAlign: 'center' }}>Cantidad</th>
        <th style={{ width: '18%', textAlign: 'center' }}></th>
        <th tabIndex={0} style={{ position: 'absolute' }}>Precio</th>
        <th tabIndex={0} style={{ width: '13%', textAlign: 'center' }}>Subtotal</th>
      </tr>
    </thead>
    <tbody>
      {productos.productos.map((producto, index) => (
        <tr key={index} style={{ borderBottom: '1px solid black' }}>
          <td style={{ textAlign: 'center' }}>
            <img tabIndex={0} src={producto.imagenProducto} alt={producto.nombre} style={{ width: '120px', height: 'auto'}} />
          </td>
          <td tabIndex={0} style={{ textAlign: 'left' }}>{producto.nombre}</td>
          <td tabIndex={0} style={{ textAlign: 'center' }}>{producto.cantidad}</td>
          <td style={{ textAlign: 'center' }}>
            <img tabIndex={0} src="./Imagenes/delete.png" alt="Boton eliminar todas las unidades del producto" height="40" />
          </td>
          <td tabIndex={0} style={{ borderRight: '2px solid black' }}>${producto.precio.toFixed(2)}</td> 
          <td tabIndex={0} style={{ textAlign: 'center' }}>${(producto.cantidad * producto.precio).toFixed(2)}</td>
        </tr>
      ))}
    </tbody>
    <tfoot>
  <tr style={{background: "#E8D2A3"}}>
    <td tabIndex={0} colSpan="5" style={{ textAlign: 'right', paddingRight: '6%'}}>Total:</td>
    <td tabIndex={0} style={{ borderLeft: '2px solid black', textAlign: 'center' }}>
      ${productos.productos.reduce((acc, producto) => acc + (producto.cantidad * producto.precio), 0).toFixed(2)}
    </td>
  </tr>
</tfoot>
  </table>
</div>

      );
}