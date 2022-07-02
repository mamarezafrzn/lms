import React, { Component } from "react";
import { Upload, Button, Select, Input } from "antd";
import CardContainer from "./common/CardContainer";
import "../styles/components/upload-sanjesh.scss";

class UploadSanjesh extends Component {
  state = {
    degree: "associate",
  };

  handleDegreeChange = (value) => {
    this.setState({ degree: value });
  };

  render() {
    const { degree } = this.state;
    const { Dragger } = Upload;
    const { Option } = Select;
    return (
      <div className="upload-sanjesh-wrapper">
        <CardContainer>
          <div
            className="content-space-between"
            style={{ marginBottom: "10px" }}>
            <h5>ارسال فایل های سنجش</h5>
            <Button type="primary">ارسال فایل</Button>
          </div>
          <div className="content-space-between">
            <div className="content-space-between" style={{ width: "57%" }}>
              <Select
                value={degree}
                onChange={this.handleDegreeChange}
                style={{ width: "135px" }}>
                <Option value="associate">کاردانی</Option>
                <Option value="bachelor">کارشناسی</Option>
              </Select>
              <Input
                placeholder="ترم تحصیلی: مثال 991"
                style={{ width: "200px" }}
              />
            </div>
            <span className="download-demo-text">
              دانلود نمونه فایل اکسل کاردانی
            </span>
          </div>
          <div className="upload-wrapper">
            <Dragger name="file">
              <i className="ic-upload fal fa-file"></i>
              <p className="upload-text">فایل اکسل</p>
              <p className="upload-desc">فرمت های مجاز xl,xls</p>
            </Dragger>
          </div>
        </CardContainer>
      </div>
    );
  }
}

export default UploadSanjesh;
