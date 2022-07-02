import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  Upload,
  Icon,
  Dropdown,
  Menu,
  message,
  Modal,
} from "antd";
import * as R from "ramda";
import UserCard from "./UserCard";
import InboxMessages from "./InboxMessages";
import BackBtn from "./BackBtn";
import CardContainer from "./common/CardContainer";
import "../styles/components/student-page.scss";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader));
  reader.readAsDataURL(img);
}

class StudenPage extends Component {
  state = {
    previewVisible: false,
    previewImageUrl: null,
    fileListKardani: [
      {
        uid: 1,
        name: "پشت کارت ملی",
        fileStatus: "done",
        url:
          "https://images.unsplash.com/photo-1510531704581-5b2870972060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80",
        updated: false,
        state: "declined",
      },
      {
        uid: 2,
        name: "روی کارت ملی",
        fileStatus: "nothing",
        url: null,
        updated: false,
        state: "pending",
      },
      {
        uid: 3,
        name: "شناسنامه",
        fileStatus: "nothing",
        url: null,
        updated: false,
        state: "pending",
      },
      {
        uid: 4,
        name: "پشت کارت ملی",
        fileStatus: "done",
        url:
          "https://images.unsplash.com/photo-1510531704581-5b2870972060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80",
        updated: false,
        state: "pending",
      },
      {
        uid: 5,
        name: "ریز نمرات دوره کاردانی",
        fileStatus: "done",
        url: null,
        updated: false,
        state: "pending",
      },
      {
        uid: 6,
        name: "گواهی ابطال معافیت تحصیلی",
        fileStatus: "done",
        url: null,
        updated: false,
        state: "pending",
      },
      {
        uid: 7,
        name: "دیگر مدارک",
        fileStatus: "done",
        url: null,
        updated: false,
        state: "pending",
      },
    ],
    fileListKarshenasi: [
      {
        uid: 8,
        name: "پشت کارت ملی",
        fileStatus: "done",
        url:
          "https://images.unsplash.com/photo-1510531704581-5b2870972060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80",
        updated: false,
        state: "pending",
      },
      {
        uid: 9,
        name: "روی کارت ملی",
        fileStatus: "nothing",
        url: null,
        updated: false,
        state: "pending",
      },
      {
        uid: 10,
        name: "شناسنامه",
        fileStatus: "nothing",
        url: null,
        updated: false,
        state: "pending",
      },
      {
        uid: 11,
        name: "پشت کارت ملی",
        fileStatus: "done",
        url:
          "https://images.unsplash.com/photo-1510531704581-5b2870972060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80",
        updated: false,
        state: "pending",
      },
      {
        uid: 12,
        name: "ریز نمرات دوره کاردانی",
        fileStatus: "done",
        url: null,
        updated: false,
        state: "pending",
      },
      {
        uid: 13,
        name: "گواهی ابطال معافیت تحصیلی",
        fileStatus: "done",
        url: null,
        updated: false,
        state: "accepted",
      },
      {
        uid: 14,
        name: "دیگر مدارک",
        fileStatus: "done",
        url: null,
        updated: false,
        state: "pending",
      },
    ],
  };

  handleUploadChange = (file, uploadItem, education) => {
    let fileListTemp = R.clone(
      education === "kardani"
        ? this.state.fileListKardani
        : this.state.fileListKarshenasi
    );
    const fileIndex = R.findIndex(R.propEq("uid", uploadItem.uid))(
      fileListTemp
    );

    if (file.file.status === "uploading") {
      fileListTemp[fileIndex] = {
        ...uploadItem,
        fileStatus: "uploading",
      };
      this.setState(
        education === "kardani"
          ? { fileListKardani: fileListTemp }
          : { fileListKarshenasi: fileListTemp }
      );
    } else if (file.file.status === "done") {
      getBase64(file.file.originFileObj, (imageUrl) => {
        fileListTemp[fileIndex] = {
          ...uploadItem,
          url: file.file.response.link,
          fileStatus: "done",
          updated: true,
        };
        this.setState(
          education === "kardani"
            ? { fileListKardani: fileListTemp }
            : { fileListKarshenasi: fileListTemp }
        );
      });
    }
    //TODO:Add exception
  };
  renderUploadButton = (loading) => {
    return (
      <React.Fragment>
        <Icon type={loading === "uploading" ? "loading" : "plus"} />
        <div>آپلود</div>
      </React.Fragment>
    );
  };
  renderUploadItems(files, education) {
    const fileMenu = (item) => {
      return (
        <Menu>
          {!item.updated && (
            <Menu.Item key="1" onClick={() => message.success("تایید شورت!")}>
              تایید مدرک
            </Menu.Item>
          )}
          {!item.updated && (
            <Menu.Item key="2" onClick={() => message.success("لغو شورت!")}>
              لغو مدرک
            </Menu.Item>
          )}
          <Menu.Item
            key="3"
            onClick={() => {
              this.setState({
                previewImageUrl: item.url,
                previewVisible: true,
              });
            }}>
            پیش نمایش
          </Menu.Item>
        </Menu>
      );
    };
    return files.map((item) => {
      return (
        <Col key={item.uid} xxl={4} xl={6} xs={6}>
          <div className="upload-item">
            <Upload
              showUploadList={false}
              action="https://file.io"
              listType="picture-card"
              onChange={(file) =>
                this.handleUploadChange(file, item, education)
              }>
              <div className="upload-box">
                {item.url &&
                item.url.length > 0 &&
                item.fileStatus !== "uploading" ? (
                  <img src={item.url} />
                ) : (
                  this.renderUploadButton(item.fileStatus)
                )}
              </div>
            </Upload>
            <span className="upload-item-header">
              {item.updated && <span className="new-badge" />}
              {item.state === "accepted" && <span className="accepted-badge" />}
              {item.state === "declined" && <span className="declined-badge" />}
              <h6>{item.name}</h6>
              {item.url && (
                <Dropdown overlay={fileMenu(item)} trigger={["click"]}>
                  <i className="far fa-ellipsis-v btn-file-menu"></i>
                </Dropdown>
              )}
            </span>
          </div>
        </Col>
      );
    });
  }

  render() {
    return (
      <Row gutter={16}>
        <BackBtn to="/admin" />
        <Col span={14}>
          <Col span={24}>
            <CardContainer title="مدارک پیش ثبت نام کاردانی">
              <div className="flex flex-column">
                <Button type="primary" className="flex upload-doc-btn">
                  ثبت مدارک
                </Button>
                <Row gutter={32}>
                  {this.renderUploadItems(
                    this.state.fileListKardani,
                    "kardani"
                  )}
                </Row>
              </div>
            </CardContainer>
          </Col>
          <Col span={24}>
            <CardContainer title="مدارک پیش ثبت نام کارشناسی">
              <div className="flex flex-column">
                <Button type="primary" className="flex upload-doc-btn">
                  ثبت مدارک
                </Button>
                <Row gutter={32}>
                  {this.renderUploadItems(
                    this.state.fileListKarshenasi,
                    "karshenasi"
                  )}
                </Row>
              </div>
            </CardContainer>
          </Col>
        </Col>
        <Col span={10}>
          <Col span={24}>
            <UserCard />
          </Col>
          <Col span={24}>
            <InboxMessages />
          </Col>
        </Col>
        <Modal
          visible={this.state.previewVisible}
          footer={null}
          onCancel={() => this.setState({ previewVisible: false })}>
          <img style={{ width: "100%" }} src={this.state.previewImageUrl} />
        </Modal>
      </Row>
    );
  }
}

export default StudenPage;
