import { Resizable } from "re-resizable";
import React from "react";
import Map from "./Map";
import CustomTable from "./CustomTable";

const Main = () => {
  return (
    <div className="main">
      <Resizable
        defaultSize={{
          width: "20%",
          height: "100vh",
        }}
        className="resizeTable"
      >
        <CustomTable />
      </Resizable>

      <Map />
    </div>
  );
};

export default Main;
