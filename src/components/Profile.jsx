import React from "react";
import BackBtn from "./BackBtn";
import { Avatar, Typography, Row, Col, Divider } from "antd";
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
            <div className="card-title-wrapper">
            <i class="icon-edit" style={{fontSize:"36px",color:"black"}}></i>
              <span className="card-title">ایمیل</span>
              <Text type="secondary">{email}</Text>
            </div>
          </Col>
          <Col sm={12} xs={24}>
            <div className="card-title-wrapper">
              <span className="card-title">رمز عبور</span>
              <Text type="secondary">***********</Text>
            </div>
          </Col>
        </Row>
      </CardContainer>
    </div>
  );
};

export default Profile;
