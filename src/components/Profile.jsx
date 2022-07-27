import React from "react";
import BackBtn from "./BackBtn";
import {
  Avatar,
  Typography,
  Row,
  Col,
  Divider,
  Button,
  Form,
  Input,
  Modal,
  message,
  Upload,
} from "antd";

import CardContainer from "./common/CardContainer";
import "../styles/components/user-card.scss";
import { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";

const uploadProps = {
  beforeUpload: (file) => {
    const isPNG = file.type === "image/png";

    if (!isPNG) {
      message.error(`${file.name} is not a png file`);
    }

    return isPNG || Upload.LIST_IGNORE;
  },
  onChange: (info) => {
    console.log(info.fileList);
  },
};

const Profile = () => {
  const [user, setUser] = useState({
    profileImage: "image address",
    name: "محمد نظری",
    code: "99121033111025",
    grade: "کارشناسی",
    entranceCode: "991",
    disciplineTitle: "کامپیوتر-سخت افزار و نرم افزار",
    acceptedDisciplineTitle: "مهندسی تکنولوژی نرم افزار",
    nationalCode: "23349298",
    birthDay: "1379/5/4",
    email: "nazari@gmail.com",
    fatherName: "رضا",
    password: "123456",
  });
  const [emailEdit, setEmailEdit] = useState(false);
  const [passwordEdit, setPasswordEdit] = useState(false);

  const {
    profileImage,
    name,
    code,
    grade,
    entranceCode,
    disciplineTitle,
    acceptedDisciplineTitle,
    nationalCode,
    birthDay,
    email,
    fatherName,
    password,
  } = user;
  const { Text } = Typography;
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailOnChange = (event) => {
    setNewEmail(event.target.value);
  };
  const handleEmailEdit = () => {
    const pattern =
      /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    const result = pattern.test(newEmail);
    if (newEmail.length > 0) {
      if (result) {
        setUser({ ...user, email: newEmail });
        setEmailEdit(false);
        setNewEmail("");
      }
    }
  };

  const handlePasswordOnChange = (event) => {
    setNewPassword(event.target.value);
  };
  const handleConfirmOnChange = (event) => {
    setConfirmPassword(event.target.value);
  };
  const handlePasswordEdit = () => {
    if (newEmail.length > 0 && newPassword == confirmPassword) {
      setUser({ ...user, password: newPassword });
      setPasswordEdit(false);
      setNewPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <div>
      <BackBtn to="/student" />
      <CardContainer
        titleAlign="center"
        title={
          <Upload {...uploadProps}>
            <Avatar
              className="avatar"
              icon="user"
              size={110}
            />
            <Button className="btnUpload">
              {" "}
              <UploadOutlined size={20}/>
           
              آپلود عکس{" "}
            </Button>
          </Upload>
        }
        bordered={false}
        style={{
          maxWidth: "800px",
          margin: "0px auto",
          height: "auto",
        }}>
        <Row type="flex" align="middle">
          <Col sm={12} xs={24}>
            <div className="card-title-wrapper">
              <span className="card-title">نام</span>
              <Text type="secondary">{name}</Text>
            </div>
          </Col>
          <Col sm={12} xs={24}>
            <div className="card-title-wrapper">
              <span className="card-title">عنوان رشته تحصیلی</span>
              <Text type="secondary">{disciplineTitle}</Text>
            </div>
          </Col>
        </Row>
        <Divider className="divider" />
        <Row type="flex" align="middle">
          <Col sm={12} xs={24}>
            <div className="card-title-wrapper">
              <span className="card-title">کد ملی</span>
              <Text type="secondary">{nationalCode}</Text>
            </div>
          </Col>
          <Col sm={12} xs={24}>
            <div className="card-title-wrapper">
              <span className="card-title">تاریخ تولد</span>
              <Text type="secondary">{birthDay}</Text>
            </div>
          </Col>
        </Row>
        <Row type="flex" align="middle">
          <Col sm={12} xs={24}>
            <div className="card-title-wrapper">
              <span className="card-title">شماره دانشجویی</span>
              <Text type="secondary">{code}</Text>
            </div>
          </Col>
          <Col sm={12} xs={24}>
            <div className="card-title-wrapper">
              <span className="card-title">نام پدر</span>
              <Text type="secondary">{fatherName}</Text>
            </div>
          </Col>
        </Row>
        <Row type="flex" align="middle">
          <Col sm={12} xs={24}>
            <div
              className="card-title-wrapper"
              onClick={() => setEmailEdit(true)}
              style={{ cursor: "pointer" }}>
              <span className="card-title">
                ایمیل <i class="far fa-edit"></i>
              </span>
              <Text type="secondary">{email}</Text>
            </div>
            {emailEdit && (
              <Modal
                visible={emailEdit}
                okText="ذخیره"
                cancelText="خروج"
                onCancel={() => setEmailEdit(false)}
                onOk={handleEmailEdit}>
                <div className="flex-column" style={{ padding: 20 }}>
                  <div className="flex-row">
                    <div className="flex-column">
                      {/* <label htmlFor="email">ایمیل جدید :</label> */}
                      <Form>
                        <Form.Item
                          name="email"
                          label="ایمیل جدید"
                          rules={[
                            {
                              required: true,
                              message: "Please input your E-mail!",
                            },
                          ]}
                          wrapperCol={{
                            offset: 0,
                            span: 24,
                          }}>
                          <Input
                            name="email"
                            id="email"
                            type="email"
                            onChange={handleEmailOnChange}
                          />
                        </Form.Item>
                      </Form>
                    </div>
                  </div>
                </div>
              </Modal>
            )}
          </Col>
          <Col sm={12} xs={24}>
            <div
              className="card-title-wrapper"
              onClick={() => setPasswordEdit(true)}
              style={{ cursor: "pointer" }}>
              <span className="card-title">
                رمز عبور <i class="far fa-edit"></i>
              </span>
              <Text type="secondary">*********</Text>
            </div>
            {passwordEdit && (
              <Modal
                visible={passwordEdit}
                okText="ذخیره"
                cancelText="خروج"
                onCancel={() => setPasswordEdit(false)}
                onOk={handlePasswordEdit}>
                <div className="flex-column" style={{ padding: 20 }}>
                  <div className="flex-row">
                    <div className="flex-column">
                      <label htmlFor="password">پسورد جدید :</label>
                      <Input
                        name="password"
                        id="password"
                        type="password"
                        onChange={handlePasswordOnChange}
                      />
                    </div>
                    <div className="flex-column">
                      <label htmlFor="confirm"> تکرار پسورد :</label>
                      <Input
                        name="confirm"
                        id="confirm"
                        type="password"
                        onChange={handleConfirmOnChange}
                      />
                    </div>
                  </div>
                </div>
              </Modal>
            )}
          </Col>
        </Row>
      </CardContainer>
    </div>
  );
};

export default Profile;
