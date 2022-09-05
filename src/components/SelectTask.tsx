import { Select } from "antd";
import React from "react";
import { points } from "../constants/addresses";

const { Option } = Select;

const SelectTask = () => {
  return (
    <>
      <Select className="select">
        {points.map((option) => (
          <Option
            key={option.id}
            value={option.name + ": " + option.coordinates}
            children={option.name}
          />
        ))}
      </Select>
    </>
  );
};

export default SelectTask;
