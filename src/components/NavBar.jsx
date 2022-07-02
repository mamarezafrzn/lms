import React, { Component } from "react";
import { Menu, Row, Drawer, Avatar, Dropdown } from "antd";
import { Link } from "react-router-dom";
import "../styles/components/navbar.scss";
import logo from "../assets/images/shamsi-logo.svg";
import profileEdit from "../assets/images/ic-editProfile.svg"

class NavBar extends Component {
  state = {
    account: {
      profileImage: "profile image adress",
      name: "مهدی رنجبر",
      code: "99121033111008",
    },
    isUserLogedIn: false,
    isDrawerOpen: false,
  };

  onMenuClick() {
    this.setState({ isDrawerOpen: true });
  }

  onCloseDrawer() {
    this.setState({ isDrawerOpen: false });
  }

  renderMenuItems(listMode) {
    return (
      <Menu className="navbar" mode={listMode}>
        <Menu.Item>
          <a href="#">درخواست گواهی</a>
        </Menu.Item>
        <Menu.Item>
          <a href="#">سیستم ناد</a>
        </Menu.Item>
        <Menu.Item>
          <a href="#">پیش انتخاب واحد</a>
        </Menu.Item>
        <Menu.Item>
          <a href="#">سایت رسمی</a>
        </Menu.Item>
      </Menu>
    );
  }


  
  render() {
    const logOutIcon = (
      <>
        <Link to="/">
       <i className="far fa-sm fa-user edit-profile circle-button"></i>
     </Link>
      <Link to="/">
        <i className="far fa-sign-out log-out circle-button"></i>
      </Link>

      </>
    );



    const onClick = function ({ key }) {
      console.log(`Click on item ${key}`);
    };
    


    const { profileImage, name, code } = this.state.account;
    const { isUserLogedIn: login } = this.state;
    const { withoutUser } = this.props;

    return (
      <div>
        <div className="desktop-navbar">
          <div className="navbar-user-details-wrapper">
            <div className="navbar-user-profle-img">
              <Dropdown
                overlay={logOutIcon}
                // placement="bottomCenter"
                // disabled={!!withoutUser}
                >
                <Avatar className="avatar" icon="user" size={38} />

              </Dropdown>
   
            </div>
            <div className="navbar-user-details">
              {withoutUser ? (
                "ابتدا وارد سامانه شوید"
              ) : (
                <React.Fragment>
                  <span className="navbar-user-name">{name}</span>
                  <span className="navbar-user-code">{code}</span>
                </React.Fragment>
              )}
            </div>
          </div>
          {this.renderMenuItems("horizontal")}
          <img src={logo} alt="Shamsipour Logo" style={{ width: "50px" }} />
        </div>
        <div className="mobile-navbar">
          <i className="fal fa-bars" onClick={() => this.onMenuClick()}></i>
        </div>
        <Drawer
          title="منو"
          placement="top"
          closable={false}
          onClose={() => this.onCloseDrawer()}
          visible={this.state.isDrawerOpen}
          height="300">
          {this.renderMenuItems("vertical")}
        </Drawer>
      </div>
    );
  }
}

export default NavBar;
