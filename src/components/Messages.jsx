import React, { Component } from "react";
import { Row, Col } from "antd";
import InboxMessages from "./InboxMessages";
import SentMessages from "./SentMessages";
import BackBtn from "./BackBtn";

class Messages extends Component {
  state = {};
  render() {
    return (
      <div>
        <BackBtn to="/student" />
        <Row gutter={22}>
          <Col xs={24} md={10}>
            <SentMessages />
          </Col>
          <Col xs={24} md={14}>
            <InboxMessages />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Messages;
