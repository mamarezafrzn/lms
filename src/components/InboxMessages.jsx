import React, { Component } from "react";
import { Divider, Pagination, Modal, Button } from "antd";
import CardContainer from "./common/CardContainer";
import "../styles/components/messages-card.scss";

class InboxMessages extends Component {
  state = {
    messages: [
      {
        id: 1,
        from: "واحد آموزش",
        title: "متن پیام",
        messageText:
          "متن پیام متن پیام متن پیام متن پیام متن پیام متن پیام متن پیام متن پیام متن پیام متن پیام متن پیام متن پیام متن پیام",
        date: "10 آذر",
        hour: "17:00",
        modal: false,
      },
      {
        id: 2,
        from: "فرستنده",
        title: "تیتر پیام",
        messageText: "متن پیام",
        date: "10 آذر",
        hour: "17:00",
        modal: false,
      },
      {
        id: 3,
        from: "فرستنده",
        title: "تیتر پیام",
        messageText: "متن پیام",
        date: "10 آذر",
        hour: "17:00",
        modal: false,
      },
      {
        id: 4,
        from: "فرستنده",
        title: "تیتر پیام",
        messageText: "متن پیام",
        date: "10 آذر",
        hour: "17:00",
        modal: false,
      },
      {
        id: 5,
        from: "فرستنده",
        title: "تیتر پیام",
        messageText: "توضیحات",
        date: "10 آذر",
        hour: "17:00",
        modal: false,
      },
    ],
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
  handleChange = (page) => {
    console.log(page);
  };
  render() {
    const { messages, currentPage, pageSize } = this.state;
    return (
      <CardContainer title="صندوق پیام">
        <Button
          type="primary"
          className="flex send-message-btn"
          onClick={this.props.onSendButtonClick}>
          ارسال پیام
        </Button>
        <div className="messages-wrapper flex flex-column">
          {messages.map((message) => (
            <div key={message.id}>
              <div
                className="message-item flex flex-column"
                onClick={() => this.openModal(message)}>
                <div className="message-head flex flex-row">
                  <span className="message-from">{message.from}</span>
                  <span className="message-title">{message.title}</span>
                </div>
                <div className="messge-body flex flex-row">
                  <span className="message-text-preview">
                    {message.messageText}
                  </span>
                  <span className="message-date">
                    {message.date + " - " + message.hour}
                  </span>
                </div>
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

export default InboxMessages;
