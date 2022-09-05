import { LatLngTuple } from "leaflet";

export const refactorCoordinates = (v: string) => {
  return {
    name: v.split(":")[0],
    coordinates: [v.split(":")[1].split(",")][0].map(Number) as LatLngTuple,
  };
};
