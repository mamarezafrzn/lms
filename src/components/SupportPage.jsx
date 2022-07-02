import React from "react";
import { Modal, Row, Col, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import InboxMessages from "./InboxMessages";
import "../styles/components/support-page.scss";

class SupportPage extends React.Component {
  state = {
    sendButtonModal: false,
  };
  hideSendModal = () => {
    this.setState({ sendButtonModal: false });
  };
  render() {
    const { Search } = Input;
    return (
      <div className="">
        <Row type="flex" gutter={32}>
          <Col span={14}>
            <InboxMessages
              onSendButtonClick={() => this.setState({ sendButtonModal: true })}
            />
          </Col>
        </Row>
        <Modal
          className="message-modal"
          visible={this.state.sendButtonModal}
          title="ارسال پیام به دانشجو"
          onCancel={this.hideSendModal}
          cancelText="خروج"
          okText="ارسال"
          onOk={this.handleSend}
          centered
          bodyStyle={{ textAlign: "right" }}>
          <div className="student-search-wrapper">
            <Search
              placeholder="شماره دانشجویی"
              onSearch={(value) => console.log(value)}
            />
            <h6>بعد از جستجو نام دانشجو اینجا نمایش داده میشود</h6>
          </div>
          <Input placeholder="موضوع پیام" className="mb-3" />
          <TextArea allowClear rows={7} />
        </Modal>
      </div>
    );
  }
}

export default SupportPage;
