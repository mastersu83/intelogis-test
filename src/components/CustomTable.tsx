import { Col, Divider, Row, Typography } from "antd";
import { useState } from "react";

import SelectTask from "./SelectTask";
import { useAppDispatch, useAppSelector } from "../hooks/appHooks";
import { AddressType } from "../types/transportationType";
import { setCoordinates } from "../redux/reducers/transportationSlice";
import { transportationsSelector } from "../redux/selectors/selector";

const CustomTable = () => {
  const dispatch = useAppDispatch();
  const transportations = useAppSelector(transportationsSelector);

  const [activeTransportation, setActiveTransportation] = useState<number>(0);

  const onClickTransport = (
    loading: AddressType,
    unloading: AddressType,
    id: number
  ) => {
    dispatch(
      setCoordinates({
        loading,
        unloading,
      })
    );
    setActiveTransportation(id);
  };

  return (
    <>
      <Row align={"middle"} gutter={16} style={{ padding: "8px" }}>
        <Col span={8}>
          <Typography.Title className="tableTitle" level={5}>
            Заявки
          </Typography.Title>
        </Col>
        <Col span={8}>
          <Typography.Title className="tableTitle" level={5}>
            Пункт погрузки
          </Typography.Title>
        </Col>
        <Col span={8}>
          <Typography.Title className="tableTitle" level={5}>
            Пункт разгрузки
          </Typography.Title>
        </Col>
      </Row>
      <Divider style={{ margin: "10px 0" }} />
      {transportations.map((tr) => (
        <Row
          className={`order ${activeTransportation === tr.id ? "active" : ""}`}
          align={"middle"}
          key={tr.id}
          gutter={16}
        >
          <Col
            className="columnItem"
            onClick={() =>
              onClickTransport(tr.loadingAddress, tr.unloadingAddress, tr.id)
            }
          >
            <span className="orderTitle">
              от: {tr.loadingAddress.name}
              <br />
              до: {tr.unloadingAddress.name}
            </span>
          </Col>
          <Col className="columnItem">
            <SelectTask
              transportation={tr}
              loading
              activeTransportation={activeTransportation}
            />
          </Col>
          <Col className="columnItem">
            <SelectTask
              transportation={tr}
              activeTransportation={activeTransportation}
            />
          </Col>
        </Row>
      ))}
    </>
  );
};

export default CustomTable;
