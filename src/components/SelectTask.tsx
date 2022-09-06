import React from "react";
import { Select } from "antd";
import { useAppDispatch, useAppSelector } from "../hooks/appHooks";

import { TransportationType } from "../types/transportationType";

import { refactorCoordinates } from "../utils/refaktorCoordinates";
import { points } from "../constants/addresses";
import { coordinatesSelector } from "../redux/selectors/selector";
import { setSelectCoordinates } from "../redux/reducers/transportationSlice";

const { Option } = Select;

type PropsType = {
  transportation: TransportationType;
  loading?: boolean;
  activeTransportation: number;
};

const SelectTask: React.FC<PropsType> = ({
  loading,
  transportation,
  activeTransportation,
}) => {
  const dispatch = useAppDispatch();
  const coordinates = useAppSelector(coordinatesSelector);

  function handleChangeLoading(v: string) {
    dispatch(
      setSelectCoordinates({
        address: refactorCoordinates(v),
        id: transportation.id,
        flag: loading,
      })
    );
  }

  return (
    <>
      <Select
        className="select"
        disabled={activeTransportation !== transportation.id}
        bordered={activeTransportation === transportation.id}
        onChange={handleChangeLoading}
        defaultValue={
          loading
            ? transportation.loadingAddress.name
            : transportation.unloadingAddress.name
        }
      >
        {points.map(
          (option) =>
            (loading
              ? option.name !== coordinates.name[1]
              : option.name !== coordinates.name[0]) && (
              <Option
                key={option.id}
                value={`${option.name}: ${option.coordinates}`}
                children={loading ? option.name : option.name}
              />
            )
        )}
      </Select>
    </>
  );
};

export default SelectTask;
