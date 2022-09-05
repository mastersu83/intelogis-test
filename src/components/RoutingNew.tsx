import { useEffect } from "react";
import { useMap } from "react-leaflet";
import "leaflet-routing-machine";
import { latLng, marker, Routing } from "leaflet";

import { useAppSelector } from "../hooks/appHooks";
import { coordinatesSelector } from "../redux/selectors/selector";

const RoutingNew = () => {
  const coordinates = useAppSelector(coordinatesSelector);

  const map = useMap();
  let points = [latLng(coordinates.loading), latLng(coordinates.unloading)];

  useEffect(() => {
    if (
      !map ||
      coordinates.loading.some((c) => c === 0) ||
      coordinates.unloading.some((c) => c === 0)
    )
      return;

    const routingControl = Routing.control({
      waypoints: points,
      show: false,
      routeWhileDragging: false,
      fitSelectedRoutes: true,
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
    };
  }, [map, coordinates]);
  return null;
};

export default RoutingNew;
