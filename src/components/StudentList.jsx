import React, { Component } from "react";
import { Row, Col } from "antd";
import StudentTable from "./StudentTable";
import SentDocuments from "./SentDocument";

class StudentList extends Component {
  state = {};
  render() {
    return (
      <Row gutter={16}>
        <Col span={10}>
          <SentDocuments />
        </Col>
        <Col span={14}>
          <StudentTable />
        </Col>
      </Row>
    );
  }
}

export default StudentList;
