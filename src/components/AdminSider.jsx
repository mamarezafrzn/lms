import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import logo from "../assets/images/shamsi-logo-white.svg";
import "../styles/components/admin-sider.scss";

const AdminSider = () => {
  return (
    <div className="sider-wrapper">
      <div>
        <div className="sider-logo-wrapper">
          <img className="sider-logo" src={logo} alt="logo" />
          <div className="sider-titles-wrapper">
            <span className="sider-first-title">سامانه بایگانی دیجیتال</span>
            <span className="sider-second-title">دانشکده شهید شمسی پور</span>
          </div>
        </div>
        <Menu theme="dark" mode="vertical" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/admin">
              <i className="fas fa-graduation-cap sider-icons"></i>
              <span className="nav-text">لیست دانشجویان</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/admin/upload-sanjesh">
              <i className="fas fa-upload sider-icons"></i>
              <span className="nav-text">آپلود فایل های سنجش</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/admin/admins-table">
              <i className="fas fa-user-friends sider-icons"></i>
              <span className="nav-text">کاربران سامانه</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/admin/support">
              <i className="fas fa-user-headset sider-icons"></i>
              <span className="nav-text">پشتیبانی دانشجو</span>
            </Link>
          </Menu.Item>
        </Menu>
      </div>
      <Link to="/">
        <div className="sider-log-out-wrapper">
          <i className="far fa-sign-out sider-log-out-icon"></i>
          <span className="sider-log-out-text">خروج</span>
        </div>
      </Link>
    </div>
  );
};

export default AdminSider;
