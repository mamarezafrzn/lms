import React, { Component } from "react";
import { Row, Col } from "antd";
import ShamsipourLogo from "./ShamsipourLogo";
import UserCard from "./UserCard";
import LinkCard from "./LinkCard";
import "../styles/components/student-dashboard.scss";
import { fontSizes } from "../consts/styles/fonts";
import { colors } from "../consts/styles/colors";
import books from "../assets/images/ic-book.svg";
import editProfileIcon from "../assets/images/user-pen-solid.svg"



class StudentDashboard extends Component {
  state = {};
  render() {

    return (
      <div>
        <ShamsipourLogo
          width="100"
          firstFontSize={fontSizes.fonSizeH5}
          secondFontSize={fontSizes.fonSizeH6}
        />
        <Row gutter={32} style={{ marginTop: "40px" }}>
          <Col md={12} xs={24}>
            <LinkCard
              to="/profile"
              title="تغییر اطلاعات کاربری"
              text="بارگذاری عکس پروفایل و تفییر اطلاعات کاربری"
              icon={editProfileIcon }
              color={colors.lightBlue}
              bgColor={colors.darkBlue}
     
              firstLink
            />
   
            <LinkCard
              to="/courses"
              title="دروس"
              text="مشاهده دروس انتخاب شده"
              icon={books}
              color={colors.darkGreen}
              bgColor={colors.lightGreen}
              ltr
              badge
            />
          </Col>
          <Col md={12} xs={24}>
            <UserCard />
          </Col>
        </Row>
      </div>
    );
  }
}

export default StudentDashboard;
