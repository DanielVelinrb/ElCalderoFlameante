export const FormularioEntrega = () => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1px 1fr', gap: '20px', maxWidth: '70%', margin: 'auto', padding: '60px 0px'}}>

        <div>
          <h2 style={{ fontSize: '26px', color: '#1D3E43', textAlign: 'center', marginBottom: '20px' }}>Datos de Facturación</h2>
          <form>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingBottom: '40px',
        fontSize: '24px', color: '#1D3E43', fontWeight: 'bold', marginBottom: '20px' }} >
              <label htmlFor="nombre">Nombre Completo</label>
              <input type="text" id="nombre" style={{ height: '40px' }} />
              <label htmlFor="ci">C.I</label>
              <input type="text" id="ci" style={{ height: '40px' }} />
              <label htmlFor="direccion">Dirección</label>
              <input type="email" id="direccion" style={{ height: '40px' }} />
              <label htmlFor="telefono">Teléfono:</label>
              <input type="text" id="telefono" style={{ height: '40px' }} />
            </div>
          </form>
        </div>
  
        <div style={{ background: 'black', width: '2px'}}></div>
          <div>
          <h2 style={{ fontSize: '26px', color: '#1D3E43', textAlign: 'center', marginBottom: '20px' }}>Datos de Pago</h2>
          <form>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingBottom: '40px',
        fontSize: '24px', color: '#1D3E43', fontWeight: 'bold', marginBottom: '20px' }}>
              <label htmlFor="tarjeta">Número de Tarjeta:</label>
              <input type="text" id="tarjeta" style={{ height: '40px' }} />
              <label htmlFor="nombrePortadorTarjeta">Nombre Portador:</label>
              <input type="text" id="nombrePortadorTarjeta" style={{ height: '40px' }} />
              <div style={{ display: 'flex', gap: '4%' }}>            
                <label htmlFor="fechaExpiracion" style={{ width: '48%'}}>Fecha Expiración:</label>
                <label htmlFor="cvv" style={{ width: '48%'}}>CVV:</label>
              </div>
              <div style={{ display: 'flex', gap: '4%' }}>            
                <input type="text" id="fechaExpiracion" style={{ height: '40px', width: '48%'}} />
                <input type="text" id="cvv" style={{ height: '40px', width: '48%'}} />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
};