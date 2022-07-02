import React, { Component } from "react";
import { Divider, Pagination, Button, Modal, Input } from "antd";
import CardContainer from "./common/CardContainer";
import "../styles/components/messages-card.scss";

class SentMessages extends Component {
  state = {
    messages: [
      {
        number: 1,
        to: "واحد آموزش",
        title: "تیتر پیام",
        messageText:
          "متن پیام متن پیام متن پیام متن پیام متن پیام متن پیام متن پیام متن پیام متن پیام متن پیام متن پیام متن پیام متن پیام",
        date: "10 آذر",
        hour: "17:00",
        modal: false,
      },
      {
        number: 2,
        to: "فرستنده",
        title: "تیتر پیام",
        messageText: "متن پیام",
        date: "10 آذر",
        hour: "17:00",
        modal: false,
      },
      {
        number: 3,
        to: "فرستنده",
        title: "تیتر پیام",
        messageText: "توضیحات",
        date: "10 آذر",
        hour: "17:00",
        modal: false,
      },
    ],
    sendButtonModal: false,
    sendMessageText: "",
    currentPage: 1,
    pageSize: 4,
  };
  openModal = (message) => {
    const messages = [...this.state.messages];
    const index = messages.indexOf(message);
    messages[index] = { ...messages[index] };
    messages[index].modal = true;
    this.setState({ messages });
  };
  hideModal = (message) => {
    const messages = [...this.state.messages];
    const index = messages.indexOf(message);
    messages[index] = { ...messages[index] };
    messages[index].modal = false;
    this.setState({ messages });
  };
  openSendModal = () => {
    this.setState({ sendButtonModal: true });
  };
  hideSendModal = () => {
    this.setState({ sendButtonModal: false });
  };
  handleSendMessage = ({ currentTarget: input }) => {
    this.setState({ sendMessageText: input.value });
  };
  handleSend = () => {
    //send message to admin
  };
  handleChange = (page) => {
    console.log(page);
  };
  render() {
    const {
      messages,
      currentPage,
      pageSize,
      sendButtonModal,
      sendMessageText,
    } = this.state;
    const { TextArea } = Input;
    return (
      <CardContainer title="پیام های ارسال شده">
        <div className="messages-wrapper flex flex-column">
          <Button
            type="primary"
            className="flex send-message-btn"
            onClick={this.openSendModal}>
            ارسال پیام
          </Button>
          <Modal
            className="message-modal"
            visible={sendButtonModal}
            title="ارسال پیام به ادمین"
            onCancel={this.hideSendModal}
            cancelText="خروج"
            okText="ارسال"
            onOk={this.handleSend}
            centered
            bodyStyle={{ textAlign: "right" }}>
            <TextArea
              allowClear
              rows={7}
              value={sendMessageText}
              onChange={this.handleSendMessage}
            />
          </Modal>
          {messages.map((message) => (
            <div key={message.number}>
              <div
                className="message-item flex flex-row"
                onClick={() => this.openModal(message)}>
                <span className="message-from">{message.to}</span>
                <span className="message-title">{message.title}</span>
                <span className="message-date">
                  {message.date + " - " + message.hour}
                </span>
              </div>
              <Divider />
              <Modal
                className="message-modal"
                visible={message.modal}
                title={message.title}
                onCancel={() => this.hideModal(message)}
                footer={null}
                centered
                bodyStyle={{ textAlign: "right" }}>
                {message.messageText}
              </Modal>
            </div>
          ))}
        </div>
        <Pagination
          className="flex pagination"
          defaultCurrent={currentPage}
          pageSize={pageSize}
          total={messages.length}
        />
      </CardContainer>
    );
  }
}

export default SentMessages;
