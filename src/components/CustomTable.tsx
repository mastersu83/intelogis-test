import { Col, Divider, Row, Typography } from "antd";
import SelectTask from "./SelectTask";

const style = { padding: "8px 8px" };

const CustomTable = () => {
  return (
    <>
      <Row align={"middle"} gutter={16} style={style}>
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
      <Row className={`order`} align={"middle"} gutter={16}>
        <Col className="columnItem">
          <span className="orderTitle">
            от: Место дуэли М.Ю. Лермонтова
            <br />
            до: Эолова арфа
          </span>
        </Col>
        <Col className="columnItem">
          <SelectTask />
        </Col>
        <Col className="columnItem">
          <SelectTask />
        </Col>
      </Row>
    </>
  );
};

export default CustomTable;
