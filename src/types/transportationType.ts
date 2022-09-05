import { LatLngTuple } from "leaflet";

export type TransportationType = {
  key: number;
  id: number;
  transportation: string;
  loadingAddress: AddressType;
  unloadingAddress: AddressType;
};

export type AddressType = {
  name: string;
  coordinates: LatLngTuple;
};

export type CoordinatesType = {
  name: string[];
  loading: LatLngTuple;
  unloading: LatLngTuple;
};
