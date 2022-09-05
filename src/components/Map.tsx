import { MapContainer, TileLayer } from "react-leaflet";
import RoutingNew from "./RoutingNew";

function Map() {
  return (
    <>
      <MapContainer center={[44.0493595, 43.0592834]} zoom={10}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <RoutingNew />
      </MapContainer>
    </>
  );
}

export default Map;
