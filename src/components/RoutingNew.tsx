import { FC, useEffect } from "react";
import { useMap } from "react-leaflet";
import "leaflet-routing-machine";

import { latLng, marker, Routing } from "leaflet";
import { CoordinatesType } from "../types/transportationType";

type PropsType = {
  coordinates: CoordinatesType;
};

const RoutingNew: FC<PropsType> = ({ coordinates }) => {
  const map = useMap();
  let points = [latLng(coordinates.loading), latLng(coordinates.unloading)];

  useEffect(() => {
    if (!map) return;

    const routingControl = Routing.control({
      waypoints: points,
      show: false,
      routeWhileDragging: false,
      // fitSelectedRoutes: true,

      plan: Routing.plan(points, {
        createMarker: (i, wp) => {
          return marker(wp.latLng, {
            draggable: false,
          })
            .bindPopup(coordinates.name[i])
            .openPopup();
        },
      }),
    }).addTo(map);
    return () => {
      map.removeControl(routingControl);
      map.removeLayer(routingControl.getPlan());
    };
  }, [map, coordinates]);
  return null;
};

export default RoutingNew;
