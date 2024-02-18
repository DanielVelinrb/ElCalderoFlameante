import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const customIcon = new L.Icon({
  iconUrl: 'Imagenes/locationRed.png', 
  iconSize: [35, 35],
  iconAnchor: [17, 35],
  popupAnchor: [0, -35], 
});
export const Mapa  = (props) => {

    return(
        <div style={{padding: '0px 5% 50px 5%'}}>
        <h2 tabIndex={0} style={{fontSize: '26px', color: '#1D3E43', paddingLeft:'30px', paddingTop: '20px'}}>{props.titulo}</h2>

        {props.barraCarga && (
        <div style={{top: 0, zIndex: 1000, width: '90%', backgroundColor: '#FFFF', borderRadius: '80px', padding: '20px 5%'}}>
            <div tabIndex={0} aria-label="Barra de carga 70%" style={{height: '20px', width: '70%', backgroundColor: '#1D3E43', textAlign: 'center', lineHeight: '20px', color: 'white', borderRadius: '80px' }}>
                70%
            </div>
        </div>
        )}

        <MapContainer center={[-0.2689185, -78.5509938]} zoom={13} style={{ height: "100vh", width: "100%"}}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[-0.2689185, -78.5509938]} icon={customIcon}>
          <Popup>
            El Caldero Flameante
          </Popup>
        </Marker>
      </MapContainer>
      </div>
    )
}