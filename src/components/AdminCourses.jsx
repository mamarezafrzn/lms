import React, { Component } from "react";
import { Space, Table, Dropdown, Menu, message, Button, Modal, Input } from "antd";
import CardContainer from "./common/CardContainer";
import "../styles/components/admins-table.scss";
import { Link, useParams } from "react-router-dom";

class AdminCourses extends Component {

  state = {
    columns: [
      {
        title: "حذف",
        dataIndex: "deleteItem",
        key: "deleteItem",
        render: (deleteItem, item) => (
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
            <span>{deleteItem}</span>
          </React.Fragment>
        ),
      },
      { title: "نام درس", dataIndex: "name", key: "name" },
      { title: "کد درس", dataIndex: "code", key: "code" },
      { title: "نوع درس", dataIndex: "type", key: "type" },
      { title: "تعداد واحد", dataIndex: "unit", key: "unit" },
      { title: "واحد تئوری", dataIndex: "speculative", key: "speculative" },
      { title: "واحد عملی", dataIndex: "practicable", key: "practicable" },
      { title: "پیش نیازها", dataIndex: "required", key: "required" },
      {
        title: 'سرفصل ها',
        key: 'action',
        render: (_, record) => {
          return (
            <Link to={`/admin/admin-courses/admin-topic/${record.name}/${record.code}`} style={{color:"darkslateblue",cursor:"pointer"}}>مشاهده </Link>
        )
        },
      },
      {
        title: 'نمرات',
        key: 'action',
        render: (_, record) => {
          return (
            <Link to={`/admin/admin-courses/scores/${record.name}/${record.code}`} style={{color:"darkslateblue",cursor:"pointer"}}>لیست دانشجویان</Link>
        )
        },
      },
    ],
    courses: [
      {
        name: "ریاضی",
        code: "220",
        type: "عمومی",
        unit: "2",
        speculative: "2",
        practicable: "0",
        required: "ندارد",
      },
      {
        name: "ریاضی 2",
        code: "221",
        type: "عمومی",
        unit: "2",
        speculative: "2",
        practicable: "0",
        required: "ریاضی 1",
      },
      {
        name: "برنامه نویسی 1",
        code: "222",
        type: "تخصصی",
        unit: "3",
        speculative: "1",
        practicable: "2",
        required: "ندارد",
      },
      {
        name: "برنامه نویسی 2",
        code: "223",
        type: "تخصصی",
        unit: "3",
        speculative: "1",
        practicable: "2",
        required: "برنامه نویسی 1",
      },
      {
        name: "مباحث ویژه",
        code: "224",
        type: "تخصصی",
        unit: "3",
        speculative: "1",
        practicable: "2",
        required: "ندارد",
      },
    ],
    addcourse: {
      name: "",
      code: "",
      type: "",
      unit: "",
      speculative: "",
      practicable: "",
      required: "",
    },
    addAdminModal: false,
  };

  deleteUser = (user) => {
    const courses = this.state.courses.filter((item) => item !== user);
    this.setState({ courses });
    message.success("درس با موفقیت حذف شد");
  };

  showAddAdminModal = () => {
    this.setState({ addAdminModal: true });
  };

  closeAddAdminModal = () => {
    this.setState({ addAdminModal: false });
  };

  handleAddAdminInputChange = ({ currentTarget: input }) => {
    const addcourse = { ...this.state.addcourse };
    addcourse[input.name] = input.value;
    this.setState({ addcourse });
  };

  handleAddAdmin = () => {
   //add
  };

  dropdownMenu = (user) => {
    return (
      <Menu>
        <Menu.Item key="0" onClick={() => this.deleteUser(user)}>
          <i className="far fa-user-minus"></i> حذف درس
        </Menu.Item>
      </Menu>
    );
  };

  render() {
    const { columns, courses, addAdminModal } = this.state;
  
    return (
      <CardContainer>
        <div className="admins-table-header">
          <h4>لیست دروس</h4>
          <Button onClick={this.showAddAdminModal} type="primary">
            افزودن درس
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
                  <label htmlFor="name">نام درس</label>
                  <Input
                    name="name"
                    id="name"
                    className="admins-table-modal-input"
                    onChange={this.handleAddAdminInputChange}
                  />
                </div>
                <div className="flex-column">
                  <label htmlFor="type">نوع درس</label>
                  <Input
                    name="type"
                    id="type"
                    className="admins-table-modal-input"
                    onChange={this.handleAddAdminInputChange}
                  />
                </div>
              </div>
              <div className="flex-row">
                <div className="flex-column">
                  <label htmlFor="unit">تعداد واحد</label>
                  <Input
                    name="unit"
                    id="unit"
                    className="admins-table-modal-input"
                    onChange={this.handleAddAdminInputChange}
                  />
                </div>

                <div className="flex-column">
                  <label htmlFor="code">کد درس</label>
                  <Input
                    name="code"
                    id="code"
                    className="admins-table-modal-input"
                    onChange={this.handleAddAdminInputChange}
                  />
                </div>
              </div>
              <div className="flex-row">
                <div className="flex-column">
                  <label htmlFor="speculative"> واحد عمومی</label>
                  <Input
                    name="speculative"
                    id="speculative"
                    className="admins-table-modal-input"
                    onChange={this.handleAddAdminInputChange}
                  />
                </div>

                <div className="flex-column">
                  <label htmlFor="practicable"> واحد تخصصی</label>
                  <Input
                    name="practicable"
                    id="practicable"
                    className="admins-table-modal-input"
                    onChange={this.handleAddAdminInputChange}
                  />
                </div>
              </div>
              <div className="flex-row">
                <div className="flex-column">
                  <label htmlFor="required">پیش نیاز</label>
                  <Input
                    name="required"
                    id="required"
                    className="admins-table-modal-input"
                    onChange={this.handleAddAdminInputChange}
                  />
                </div>
              </div>
            </div>
          </Modal>
        </div>
        <Table columns={columns} dataSource={courses} pagination={false} />
      </CardContainer>
    );
  }
}

export default AdminCourses;
