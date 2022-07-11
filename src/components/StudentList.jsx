import React, { Component } from "react";
import { Row, Col } from "antd";
import StudentTable from "./StudentTable";
import SentDocuments from "./SentDocument";

class StudentList extends Component {
  state = {};
  render() {
    return (
      <Row gutter={16}>
        <Col span={24}>
          <StudentTable />
        </Col>
        <Col span={24}>
          <SentDocuments />
        </Col>
      </Row>
    );
  }
}

export default StudentList;
