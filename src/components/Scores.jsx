import React, { Component } from "react";
import { withRouter } from "react-router";
import {
  Space,
  Table,
  Dropdown,
  Menu,
  message,
  Button,
  Modal,
  Input,
} from "antd";
import CardContainer from "./common/CardContainer";
import "../styles/components/admins-table.scss";
import { Link } from "react-router-dom";
import { toHaveFormValues } from "@testing-library/jest-dom/dist/to-have-form-values";
import { ConsoleSqlOutlined } from "@ant-design/icons";

class Scores extends Component {

  state = {
    columns: [
      { title: "نام دانشجو", dataIndex: "name", key: "name" },
      { title: "شماره دانشجویی", dataIndex: "studentCode", key: "studentCode" },
      { title: "نمره", key: "score", dataIndex: "score" },
    ],
    courses: [
      {
        name: "محمد نظری",
        studentCode: "99121033111008",
        score: "20",
      },
      {
        name: "علی بکماز",
        studentCode: "99121033111008",
        score: "12",
      },
      {
        name: "محمدرضا فیروزآبادی",
        studentCode: "99121033111221",
        score: "ندارد",
      },
      {
        name: "مهدی رنجبر",
        studentCode: "99121033345678",
        score: "18",
      },
      {
        name: "بنده خدا",
        studentCode: "99121033989237",
        score: "ندارد",
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
    edit: false,
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
    const { location, history } = this.props;
    const course = location.pathname.split("/")[4]
    const id = location.pathname.split("/")[5]

    const { columns, courses, addAdminModal } = this.state;
    return (
      <CardContainer>
        <div className="admins-table-header">
          <h4>لیست  {course}</h4>

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

export default Scores;
