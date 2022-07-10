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
} from "antd";
import CardContainer from "./common/CardContainer";
import "../styles/components/user-card.scss";
import { useState } from "react";

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
    if (newEmail.length > 0) {
      setUser({ ...user, email: newEmail });
      setEmailEdit(false)
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
      setPasswordEdit(false)
    }
  };

  const emailForm = (
    <Form
      style={{ direction: "rtl", float: "right" }}
      name="basic"
      layout="vertical"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      autoComplete="off">
      <Form.Item
        label="ایمیل جدید"
        name="email"
        rules={[
          {
            required: true,
            message: "ایمیل جدید را وارد کنید!",
          },
        ]}>
        <Input />
      </Form.Item>
    </Form>
  );

  return (
    <div>
      <BackBtn to="/student" />
      <CardContainer
        titleAlign="center"
        title={
          <Avatar
            style={{ marginBottom: "2rem" }}
            className="avatar"
            icon="user"
            size={100}
          />
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
                      <label htmlFor="email">ایمیل جدید :</label>
                      <Input
                        name="email"
                        id="email"
                        type="email"
                        onChange={handleEmailOnChange}
                      />
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
