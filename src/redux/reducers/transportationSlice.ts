import {
  AddressType,
  CoordinatesType,
  TransportationType,
} from "../../types/transportationType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type InitialStateType = {
  transportations: TransportationType[];
  coordinates: CoordinatesType;
};

const initialState: InitialStateType = {
  transportations: [
    {
      key: 1,
      id: 1,
      transportation: "Заявка на перевозку №1",
      loadingAddress: {
        name: "Место дуэли М.Ю. Лермонтова",
        coordinates: [44.059616, 43.076408],
      },
      unloadingAddress: {
        name: "Эолова арфа",
        coordinates: [44.040643, 43.088178],
      },
    },
    {
      key: 2,
      id: 2,
      transportation: "Заявка на перевозку №2",
      loadingAddress: {
        name: "Машук",
        coordinates: [44.050686, 43.087625],
      },
      unloadingAddress: {
        name: "Китайская беседка",
        coordinates: [44.036, 43.082907],
      },
    },
    {
      key: 3,
      id: 3,
      transportation: "Заявка на перевозку №3",
      loadingAddress: {
        name: "Цветник",
        coordinates: [44.036355, 43.078627],
      },
      unloadingAddress: {
        name: "Провал",
        coordinates: [44.045591, 43.098956],
      },
    },
    {
      key: 4,
      id: 4,
      transportation: "Заявка на перевозку №4",
      loadingAddress: {
        name: "Парк Победы",
        coordinates: [44.037987, 43.009987],
      },
      unloadingAddress: {
        name: "Успенский Второафонский монастырь",
        coordinates: [44.089726, 43.011413],
      },
    },
  ],
  coordinates: {
    name: ["", ""],
    loading: [0, 0],
    unloading: [0, 0],
  },
};

const transportationSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectCoordinates(
      state: InitialStateType,
      action: PayloadAction<{
        address: AddressType;
        id?: number;
        flag?: boolean;
      }>
    ) {
      action.payload.flag
        ? (state.coordinates.loading = action.payload.address.coordinates)
        : (state.coordinates.unloading = action.payload.address.coordinates);

      state.coordinates.name[action.payload.flag ? 0 : 1] =
        action.payload.address.name;

      state.transportations = state.transportations.map((a) =>
        a.id === action.payload.id
          ? action.payload.flag
            ? { ...a, loadingAddress: action.payload.address }
            : { ...a, unloadingAddress: action.payload.address }
          : a
      );
    },
    setCoordinates(
      state: InitialStateType,
      action: PayloadAction<{
        loading: AddressType;
        unloading: AddressType;
        id: number;
      }>
    ) {
      state.coordinates.loading = action.payload.loading.coordinates;
      state.coordinates.unloading = action.payload.unloading.coordinates;

      state.coordinates.name = [
        action.payload.loading.name,
        action.payload.loading.name,
      ];

      state.transportations = state.transportations.map((a) =>
        a.id === action.payload.id
          ? {
              ...a,
              unloadingAddress: action.payload.unloading,
              loadingAddress: action.payload.loading,
            }
          : a
      );
    },
  },
});

export const { setSelectCoordinates, setCoordinates } =
  transportationSlice.actions;

export default transportationSlice.reducer;
