import React, { Component } from "react";
import {
  Select,
  Input,
  Table,
  Pagination,
  Dropdown,
  Button,
  Radio,
  Col,
} from "antd";
import { Link } from "react-router-dom";
import CardContainer from "./common/CardContainer";
import "../styles/components/student-table.scss";
import profile from "../assets/images/user-profile.jpg";
import profile2 from "../assets/images/user-profile2.jpg";

class StudentTable extends Component {
  state = {
    filterVisable: false,
    columns: [
      {
        title: "",
        dataIndex: "imgAddres",
        key: "img",
        render: (img, item) => (
          <div className="student-profile-img-wrapper">
            <img
              className="student-profile-img"
              src={img}
              alt="Student Profile"
            />
            {item.notification && (
              <div className="student-table-notification"></div>
            )}
          </div>
        ),
      },
      {
        title: "کد ملی",
        dataIndex: "nationalCode",
        key: "nationalCode",
        render: (nationalCode) => (
          <Link to={`/admin/student/${nationalCode}`}>{nationalCode}</Link>
        ),
      },
      {
        title: "نام و نام خانوادگی",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "شماره دانشجویی",
        dataIndex: "studentCode",
        key: "studentCode",
      },
      {
        title: "رشته قبولی",
        dataIndex: "acceptedDiscipline",
        key: "acceptedDiscipline",
      },
      {
        title: "نام پدر",
        dataIndex: "fatherName",
        key: "fatherName",
      },
      {
        title: "",
        dataIndex: "link",
        key: "link",
        render: (link) => (
          <Link to={link}>
            <i className="far fa-comment student-link"></i>
          </Link>
        ),
      },
    ],
    students: [
      {
        name: "مهدی رنجبر",
        imgAddres: profile,
        notification: true,
        nationalCode: "12345678910",
        studentCode: "99121033111008",
        acceptedDiscipline: "نرم افزار",
        fatherName: "علی",
        link: "#",
        key: "1",
      },
      {
        name: "محمد نظری",
        imgAddres: profile2,
        notification: false,
        nationalCode: "0023349298",
        studentCode: "99121033111025",
        acceptedDiscipline: "نرم افزار",
        fatherName: "رضا",
        link: "#",
        key: "2",
      },
      {
        name: "مهدی رنجبر",
        imgAddres: profile,
        notification: true,
        nationalCode: "12345678910",
        studentCode: "99121033111008",
        acceptedDiscipline: "نرم افزار",
        fatherName: "علی",
        link: "#",
        key: "3",
      },
      {
        name: "محمد نظری",
        imgAddres: profile2,
        notification: false,
        nationalCode: "0023349298",
        studentCode: "99121033111025",
        acceptedDiscipline: "نرم افزار",
        fatherName: "رضا",
        link: "#",
        key: "4",
      },
    ],
    searchQuery: "",
    acceptedRadio: "all",
    degreeRadio: "associate",
    finalSearchQuery: "",
  };

  handleDropdownVisibilityChange(state) {
    this.setState({ filterVisable: state });
  }

  handleSearch = ({ currentTarget: input }) => {
    this.setState({ searchQuery: input.value });
  };

  handleDegreeChange = ({ target }) => {
    this.setState({ degreeRadio: target.value });
  };

  handleacceptedRadioChange = ({ target }) => {
    this.setState({ acceptedRadio: target.value });
  };

  handleApplyFilter = () => {
    const searchQuery = this.state.searchQuery;
    this.setState({ finalSearchQuery: searchQuery });
  };

  handleResetFilter = () => {
    this.setState({ finalSearchQuery: "" });
  };

  render() {
    const { Option } = Select;
    const { Search } = Input;
    const {
      columns,
      students,
      finalSearchQuery,
      acceptedRadio,
      degreeRadio,
    } = this.state;
    const filterContent = (
      <div
      className="student-table-filter-wrapper"
        onClick={() => this.setState({ filterVisable: true })}>
        <Search
          className="student-table-search"
          placeholder="کد ملی، شماره دانشجویی،نام دانشجو"
          onChange={this.handleSearch}
        />
        <Radio.Group
          value={acceptedRadio}
          onChange={this.handleacceptedRadioChange}>
          <Radio.Button value="all">همه</Radio.Button>
          <Radio.Button value="accepted">تایید شده</Radio.Button>
          <Radio.Button value="notAccepted">تایید نشده</Radio.Button>
        </Radio.Group>
        <Radio.Group value={degreeRadio} onChange={this.handleDegreeChange}>
          <Radio.Button value="associate">کاردانی</Radio.Button>
          <Radio.Button value="bachelor">کارشناسی</Radio.Button>
        </Radio.Group>
        <div className="filter-actions-wrapper">
          <Button
            type="link"
            className="apply-filter"
            onClick={this.handleApplyFilter}>
            اعمال فیلتر
          </Button>
          <Button
            type="link"
            className="remove-filter"
            onClick={this.handleResetFilter}>
            حذف فیلتر
          </Button>
        </div>
      </div>
    );
    let filtredStudents = students;
    if (finalSearchQuery) {
      filtredStudents = students.filter(
        (student) =>
          student.name.indexOf(finalSearchQuery) >= 0 ||
          student.nationalCode.indexOf(finalSearchQuery) >= 0 ||
          student.studentCode.indexOf(finalSearchQuery) >= 0
      );
    }
    return (
      <CardContainer title="دانشجویان">
        <div className="student-table-card-header">
          <Dropdown
            overlay={filterContent}
            trigger={["click"]}
            visible={this.state.filterVisable}
            onVisibleChange={(visable) =>
              this.handleDropdownVisibilityChange(visable)
            }>
            <Button shape="circle">
              <i className="fas fa-filter"></i>
            </Button>
          </Dropdown>
        </div>
        <div className="student-table-card-body">
          <Table
            className="student-table"
            columns={columns}
            dataSource={filtredStudents}
            pagination={false}
          />
        </div>
        <div className="student-table-card-footer">
          <Pagination
            className="student-table-pagination"
            defaultCurrent={1}
            total={students.length}
            pageSize={4}
          />
          <div>
            <span>دانشجویان کاردانی : 254</span>
            <span style={{ marginRight: "20px" }}>
              دانشجویان کارشناسی : 148
            </span>
          </div>
        </div>
      </CardContainer>
    );
  }
}

export default StudentTable;
