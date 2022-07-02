import React from "react";
import {
  Row,
  Col,
  Select,
  Upload,
  Input,
  Button,
  Tooltip,
  Divider,
} from "antd";
import "../styles/components/register-documents.scss";
import CardContainer from "./common/CardContainer";
import BackBtn from "./BackBtn";

class RegisterDocuments extends React.Component {
  state = {
    docName: "",
    docTypes: [
      {
        key: "birth-certificate",
        value: "شناسنامه",
      },
      {
        key: "front-id-card",
        value: "روی کارت ملی",
      },
      {
        key: "back-id-card",
        value: "پشت کارت ملی",
      },
      {
        key: "education-pardon-revocation",
        value: "گواهی ابطال معافیت تحصیلی",
      },
      {
        key: "associate-degree",
        value: "مدرک تحصیلی فوق دیپلم",
      },
      {
        key: "associate-degree-scores",
        value: "ریز نمرات دوره کاردانی",
      },
      {
        key: "other",
        value: "دیگر",
      },
    ],
    selectedDocType: "birth-certificate",
    sentDocs: [
      {
        docName: "شناسنامه",
        downloadUrl: "http://google.com",
        status: "waiting",
      },
      {
        docName: "ریز نمرات دوره کاردانی",
        downloadUrl: "http://google.com",
        status: "verified",
      },
      {
        docName: "گواهی ابطال معافیت تحصیلی",
        downloadUrl: "http://google.com",
        status: "verified",
      },
      {
        docName: "روی کارت ملی",
        downloadUrl: "http://google.com",
        status: "unverified",
        reason: "تصویر واضح نیست",
      },
      {
        docName: "پشت کارت ملی",
        downloadUrl: "http://google.com",
        status: "waiting",
      },
      {
        docName: "مدرک تحصیلی فوق دیپلم",
        downloadUrl: "http://google.com",
        status: "waiting",
      },
    ],
  };

  renderDocTypeOptions() {
    const { Option } = Select;
    return this.state.docTypes.map((item) => (
      <Option key={item.key} value={item.key}>
        {item.value}
      </Option>
    ));
  }

  onSelectDoc(value) {
    this.setState({ selectedDocType: value });
  }

  onChangeDocName(e) {
    this.setState({ docName: e.target.value });
  }

  renderUploadDocs() {
    const { Dragger } = Upload;
    return (
      <CardContainer title="ارسال مدارک">
        <div className="document-type-wrapper">
          <h6 className="document-type-title">نوع مدرک</h6>
          <Select
            style={{ width: "250px" }}
            value={this.state.selectedDocType}
            showSearch
            placeholder="مدرک"
            defaultValue={this.state.docTypes[0].key}
            onSelect={(value) => this.onSelectDoc(value)}>
            {this.renderDocTypeOptions()}
          </Select>
        </div>
        {this.state.selectedDocType === "other" && (
          <Input
            className="input-doc-name"
            placeholder="نام مدرک"
            onChange={(e) => this.onChangeDocName(e)}
            value={this.state.docName}
          />
        )}
        <div className="upload-wrapper">
          <Dragger name="file">
            <i className="ic-upload fal fa-file"></i>
            <p className="upload-text">انتخاب فایل</p>
            <p className="upload-desc">فرمت فایل باید jpg یا png باشد</p>
          </Dragger>
        </div>
        <div className="submit-wrapper">
          <div className="track-code-wrapper">
            <h6>کد پیگیری</h6>
            <h6 className="track-code">4865878459</h6>
          </div>
          <Button type="primary">ثبت</Button>
        </div>
      </CardContainer>
    );
  }

  renderSentDocsItems() {
    const getDocStatus = (status) => {
      switch (status) {
        case "waiting":
          return "در انتظار تایید";
        case "verified":
          return "تایید شده";
        case "unverified":
          return "تایید نشده";
        default:
          break;
      }
    };
    return this.state.sentDocs.map((item) => (
      <React.Fragment>
        <div className="sent-doc-item">
          <span className="doc-item-right">
            {item.reason && (
              <Tooltip title={item.reason}>
                <i className="fas fa-info-circle"></i>
              </Tooltip>
            )}
            <h5>{item.docName}</h5>
          </span>
          <span className="doc-item-left">
            <h5 className={item.status}>{getDocStatus(item.status)}</h5>
            <a href={item.downloadUrl} target="_blank">
              <i className="fal fa-download"></i>
            </a>
          </span>
        </div>
        <Divider className="divider" />
      </React.Fragment>
    ));
  }

  renderSentDocs() {
    return (
      <CardContainer title="ارسال مدارک">
        <div className="sent-docs-wrapper">{this.renderSentDocsItems()}</div>
      </CardContainer>
    );
  }

  render() {
    return (
      <Row gutter={32}>
        <BackBtn to="/student" />
        <Col md={13} xs={24}>
          {this.renderSentDocs()}
        </Col>
        <Col md={11} xs={24}>
          {this.renderUploadDocs()}
        </Col>
      </Row>
    );
  }
}

export default RegisterDocuments;
