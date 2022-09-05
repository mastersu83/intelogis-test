import { MapContainer, TileLayer } from "react-leaflet";

import { LatLngTuple } from "leaflet";
import RoutingNew from "./RoutingNew";

function Map() {
  const coordinates = {
    name: ["", ""],
    loading: [0, 0] as LatLngTuple,
    unloading: [0, 0] as LatLngTuple,
  };
  const center: LatLngTuple = [44.0493595, 43.0592834];

  return (
    <>
      <MapContainer center={center} zoom={12}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <RoutingNew coordinates={coordinates} />
      </MapContainer>
    </>
  );
}

export default Map;
