import { MapContainer, TileLayer } from "react-leaflet";
// import "leaflet-routing-machine";
import { LatLngTuple } from "leaflet";
import RoutingNew from "./RoutingNew";

function Map() {
  const coordinates = {
    name: ["", ""],
    loading: [44.037987, 43.009987] as LatLngTuple,
    unloading: [44.089726, 43.011413] as LatLngTuple,
  };
  const center: LatLngTuple = [44.0493595, 43.0592834];

  return (
    <>
      <MapContainer center={center} zoom={12}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <RoutingNew coordinates={coordinates} />
      </MapContainer>
    </>
  );
}

export default Map;
