import React, { Component } from "react";
import { Table, Dropdown, Menu, message, Button, Modal, Input } from "antd";
import CardContainer from "./common/CardContainer";
import "../styles/components/admins-table.scss";

class AdminsTable extends Component {
  state = {
    columns: [
      {
        title: "آخرین بازدید",
        dataIndex: "lastSeen",
        key: "lastSeen",
        render: (lastSeen, item) => (
          <React.Fragment>
            {item.accessTitle !== "مدیریت سامانه" && (
              <Dropdown
                overlay={() => this.dropdownMenu(item)}
                trigger={["click"]}
                placement="bottomRight">
                <a className="ant-dropdown-link" href="#">
                  <i
                    className="far fa-chevron-down"
                    style={{ marginLeft: "10px" }}></i>
                </a>
              </Dropdown>
            )}
            <span>{lastSeen}</span>
          </React.Fragment>
        ),
      },
      { title: "نام و نام خانوادگی", dataIndex: "name", key: "name" },
      { title: "نام کاربری", dataIndex: "userName", key: "userName" },
      { title: "گذرواژه", dataIndex: "password", key: "password" },
      { title: "سطح دسترسی", dataIndex: "accessTitle", key: "accessTitle" },
    ],
    admins: [
      {
        name: "مهدی",
        userName: "mahdi",
        password: "sd2***",
        lastSeen: "12:00-1400/1/1",
        accessTitle: "مدیریت سامانه",
      },
      {
        name: "محمد",
        userName: "mohammad",
        password: "de4***",
        lastSeen: "13:00-1400/1/2",
        accessTitle: "کاربر سامانه",
      },
      {
        name: "علی",
        userName: "ali",
        password: "gh5***",
        lastSeen: "14:00-1400/1/3",
        accessTitle: "کاربر سامانه",
      },
      {
        name: "اکبر",
        userName: "akbar",
        password: "wr6***",
        lastSeen: "15:00-1400/1/4",
        accessTitle: "کاربر سامانه",
      },
      {
        name: "احمد",
        userName: "ahmad",
        password: "fg3***",
        lastSeen: "16:00-1400/1/5",
        accessTitle: "کاربر سامانه",
      },
    ],
    addAdmin: { name: "", userName: "", password: "" },
    addAdminModal: false,
  };

  deleteUser = (user) => {
    const admins = this.state.admins.filter((item) => item !== user);
    this.setState({ admins });
    message.success("کاربر با موفقیت حذف شد");
  };

  showAddAdminModal = () => {
    this.setState({ addAdminModal: true });
  };

  closeAddAdminModal = () => {
    this.setState({ addAdminModal: false });
  };

  handleAddAdminInputChange = ({ currentTarget: input }) => {
    const addAdmin = { ...this.state.addAdmin };
    addAdmin[input.name] = input.value;
    this.setState({ addAdmin });
  };

  handleAddAdmin = () => {
    //add admin
  };

  dropdownMenu = (user) => {
    return (
      <Menu>
        <Menu.Item key="0" onClick={() => this.deleteUser(user)}>
          <i className="far fa-user-minus"></i> حذف کاربر
        </Menu.Item>
      </Menu>
    );
  };

  render() {
    const { columns, admins, addAdminModal } = this.state;
    return (
      <CardContainer>
        <div className="admins-table-header">
          <h4>لیست کاربران سامانه</h4>
          <Button onClick={this.showAddAdminModal} type="primary">
            افزودن ادمین
          </Button>
          <Modal
            visible={addAdminModal}
            okText="ذخیره"
            cancelText="خروج"
            onCancel={this.closeAddAdminModal}
            onOk={this.handleAddAdmin}>
            <div className="flex-column" style={{ padding: 20 }}>
              <div className="flex-row">
                <div className="flex-column">
                  <label htmlFor="name">نام و نام خوانوادگی</label>
                  <Input
                    name="name"
                    id="name"
                    className="admins-table-modal-input"
                    onChange={this.handleAddAdminInputChange}
                  />
                </div>
                <div className="flex-column">
                  <label htmlFor="userName">نام کاربری</label>
                  <Input
                    name="userName"
                    id="userName"
                    className="admins-table-modal-input"
                    onChange={this.handleAddAdminInputChange}
                  />
                </div>
              </div>
              <div className="flex-row">
                <div className="flex-column">
                  <label htmlFor="password">رمز عبور</label>
                  <Input
                    name="password"
                    id="password"
                    className="admins-table-modal-input"
                    onChange={this.handleAddAdminInputChange}
                  />
                </div>
              </div>
            </div>
          </Modal>
        </div>
        <Table columns={columns} dataSource={admins} pagination={false} />
      </CardContainer>
    );
  }
}

export default AdminsTable;
