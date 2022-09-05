import { RootState } from "../reduxStore";

export const transportationsSelector = (state: RootState) => {
  return state.transportationSlice.transportations;
};
export const coordinatesSelector = (state: RootState) => {
  return state.transportationSlice.coordinates;
};
