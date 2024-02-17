
export const ResumenDatosPersonales = (props) => {
    return (
        <div>
        <h2 tabIndex={0} style={{fontSize: '26px', color: '#1D3E43', paddingLeft:'80px'}}>Datos Personales</h2>
        <div style={{padding: '0px 10%'}}>
    
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' , fontSize: '24px'}}>
                <div style={{ width: '44%' }}>
                    <span tabIndex={0} style={{fontSize: '22px', color: '#1D3E43', fontWeight: 'bold'}}>Nombre</span>
                    <label tabIndex={0} style={{ display: 'block', border: '1px solid black', height: '40px', fontSize: '22px', marginTop: '5px'}}>{props.formData.nombre}</label>
                </div>
                <div style={{ width: '44%' }}>
                    <span tabIndex={0} style={{fontSize: '22px', color: '#1D3E43', fontWeight: 'bold'}}>C.I</span>
                    <label tabIndex={0} style={{ display: 'block', border: '1px solid black', height: '40px', fontSize: '22px', marginTop: '5px'}}>{props.formData.ci}</label>
                </div>
            </div>
    
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '44%' }}>
                    <span tabIndex={0} style={{fontSize: '22px', color: '#1D3E43', fontWeight: 'bold'}}>Dirección</span>
                    <label tabIndex={0} style={{ display: 'block', border: '1px solid black', height: '40px', fontSize: '22px', marginTop: '5px'}}>{props.formData.direccion}</label>
                </div>
                <div style={{ width: '44%' }}>
                    <span tabIndex={0} style={{fontSize: '22px' , color: '#1D3E43', fontWeight: 'bold'}}>Teléfono</span>
                    <label tabIndex={0} style={{ display: 'block', border: '1px solid black', height: '40px', fontSize: '22px', marginTop: '5px'}}>{props.formData.telefono}</label>
                </div>
            </div>
        </div>
        </div>
    );
};