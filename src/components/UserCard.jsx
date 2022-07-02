import React, { Component } from "react";
import { Avatar, Typography, Row, Col, Divider } from "antd";
import CardContainer from "./common/CardContainer";
import "../styles/components/user-card.scss";

class UserCard extends Component {
  state = {
    user: {
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
    },
  };
  render() {
    const { Text } = Typography;
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
    } = this.state.user;
    return (
      <CardContainer title="مشخصات دانشجو" titleAlign="center">
        <Row className="card-row" type="flex" align="middle">
          <Col sm={16} xs={24}>
            <div className="avatar-wrapper">
              <Avatar className="avatar" icon="user" size={50} />
              <div className="card-title-wrapper">
                <span className="card-title">{name}</span>
                <Text type="secondary">{code}</Text>
              </div>
            </div>
          </Col>
          <Col sm={8} xs={24}>
            <div
              className="grade-badge-wrapper"
              style={{ textAlign: "center" }}>
              <span className="grade-badge">
                {grade + " - " + entranceCode}
              </span>
            </div>
          </Col>
        </Row>
        <Row type="flex" align="middle">
          <Col sm={12} xs={24}>
            <div className="card-title-wrapper">
              <span className="card-title">عنوان رشته تحصیلی</span>
              <Text type="secondary">{disciplineTitle}</Text>
            </div>
          </Col>
          <Col sm={12} xs={24}>
            <div className="card-title-wrapper">
              <span className="card-title">عنوان رشته قبولی</span>
              <Text type="secondary">{acceptedDisciplineTitle}</Text>
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
              <span className="card-title">پست الکترونیکی</span>
              <Text type="secondary">{email}</Text>
            </div>
          </Col>
          <Col sm={12} xs={24}>
            <div className="card-title-wrapper">
              <span className="card-title">نام پدر</span>
              <Text type="secondary">{fatherName}</Text>
            </div>
          </Col>
        </Row>
      </CardContainer>
    );
  }
}

export default UserCard;
