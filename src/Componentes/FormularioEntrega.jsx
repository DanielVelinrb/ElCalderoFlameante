import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const FormularioEntrega = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    ci: '',
    direccion: '',
    telefono: '',
    tarjeta: '',
    nombrePortadorTarjeta: '',
    fechaExpiracion: '',
    cvv: '',
  });

  let navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/TrackingPage', { state: { formData } });
  };

  return (
    <div className='container'>
      <div className='row'>

        <div className='col-sm-12 col-md-6 line-column '>
          <h2 tabIndex={0} style={{ fontSize: '26px', color: '#1D3E43', textAlign: 'center', marginBottom: '20px' }}>Datos de Facturación</h2>
          <form>
            <div style={{
              display: 'flex', flexDirection: 'column', gap: '10px', paddingBottom: '40px',
              fontSize: '24px', color: '#1D3E43', fontWeight: 'bold', marginBottom: '20px'
            }} >
              <label htmlFor="nombre">Nombre Completo</label>
              <input type="text" id="nombre" value={formData.nombre} onChange={handleChange} style={{ height: '40px' }} />
              <label htmlFor="ci">C.I</label>
              <input type="text" id="ci" value={formData.ci} onChange={handleChange} style={{ height: '40px' }} />
              <label htmlFor="direccion">Dirección</label>
              <input type="text" id="direccion" value={formData.direccion} onChange={handleChange} style={{ height: '40px' }} />
              <label htmlFor="telefono">Teléfono:</label>
              <input type="text" id="telefono" value={formData.telefono} onChange={handleChange} style={{ height: '40px' }} />
            </div>
          </form>
        </div>

        <div className='col-sm-12 col-md-6 line-column '>

          <h2 tabIndex={0} style={{ fontSize: '26px', color: '#1D3E43', textAlign: 'center', marginBottom: '20px' }}>Datos de Pago</h2>
          <form>
            <div style={{
              display: 'flex', flexDirection: 'column', gap: '10px', paddingBottom: '40px',
              fontSize: '24px', color: '#1D3E43', fontWeight: 'bold', marginBottom: '20px'
            }}>
              <label htmlFor="tarjeta">Número de Tarjeta:</label>
              <input type="text" id="tarjeta" value={formData.tarjeta} onChange={handleChange} style={{ height: '40px' }} />
              <label htmlFor="nombrePortadorTarjeta">Nombre Portador:</label>
              <input type="text" id="nombrePortadorTarjeta" value={formData.nombrePortadorTarjeta} onChange={handleChange} style={{ height: '40px' }} />
              <div style={{ display: 'flex', gap: '4%' }}>
                <label htmlFor="fechaExpiracion" style={{ width: '48%' }}>Fecha Expiración:</label>
                <label htmlFor="cvv" style={{ width: '48%' }}>CVV:</label>
              </div>
              <div style={{ display: 'flex', gap: '4%' }}>
                <input type="text" id="fechaExpiracion" value={formData.fechaExpiracion} onChange={handleChange} style={{ height: '40px', width: '48%' }} />
                <input type="text" id="cvv" value={formData.cvv} onChange={handleChange} style={{ height: '40px', width: '48%' }} />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div style={{ textAlign: 'center', paddingBottom: '40px' }}>
        <button onClick={handleSubmit} style={{ background: '#1D3E43', color: '#E8D2A3', fontSize: '26px', width: '26%', padding: '13px 11px' }}>Pagar</button>
      </div>
    </div>
  );
};