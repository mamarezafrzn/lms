import React, { Component } from "react";
import { Input, Table, Pagination } from "antd";
import { Link } from "react-router-dom";
import CardContainer from "./common/CardContainer";
import "../styles/components/student-table.scss";
import profile from "../assets/images/user-profile.jpg";
import profile2 from "../assets/images/user-profile2.jpg";

class SentDocuments extends Component {
  state = {
    columns: [
      {
        title: "",
        dataIndex: "imgAddres",
        key: "img",
        render: (img) => (
          <img
            className="student-profile-img"
            src={img}
            alt="Student Profile"
          />
        ),
      },
      {
        title: "نام و نام خانوادگی",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "رشته قبولی",
        dataIndex: "acceptedDiscipline",
        key: "acceptedDiscipline",
      },
      {
        title: "مدارک ارسال شده",
        dataIndex: "sentDocuments",
        key: "sentDocuments",
        render: (sentDocuments, item) => (
          <span
            className={` ${
              item.documentAccepted
                ? "accepted-documents"
                : "not-accepted-documents"
            }`}>
            {sentDocuments} مدرک ارسال شده
          </span>
        ),
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
        acceptedDiscipline: "نرم افزار",
        sentDocuments: 5,
        documentAccepted: true,
        link: "#",
        key: "1",
      },
      {
        name: "محمد نظری",
        imgAddres: profile2,
        acceptedDiscipline: "نرم افزار",
        sentDocuments: 6,
        documentAccepted: false,
        link: "#",
        key: "2",
      },
      {
        name: "مهدی رنجبر",
        imgAddres: profile,
        acceptedDiscipline: "نرم افزار",
        sentDocuments: 5,
        documentAccepted: true,
        link: "#",
        key: "3",
      },
      {
        name: "محمد نظری",
        imgAddres: profile2,
        acceptedDiscipline: "نرم افزار",
        sentDocuments: 6,
        documentAccepted: false,
        link: "#",
        key: "4",
      },
    ],
    searchQuery: "",
  };

  handleSearch = ({ currentTarget: input }) => {
    this.setState({ searchQuery: input.value });
  };

  render() {
    const { Search } = Input;
    const { columns, students, searchQuery } = this.state;
    let filtredStudents = students;
    if (searchQuery) {
      filtredStudents = students.filter(
        (student) => student.name.indexOf(searchQuery) >= 0
      );
    }
    return (
      <CardContainer style={{ padding: "5px 10px" }}>
        <div className="student-table-card-wrapper">
          <div className="sent-document-table-header">
            <h5>
              مدارک ارسال شده <span className="sent-documents-badge">5</span>
            </h5>
            <Search
              style={{ marginTop: 0 }}
              className="student-table-search"
              placeholder="کد ملی، شماره دانشجویی،نام دانشجو"
              onChange={this.handleSearch}
            />
          </div>
          <div className="student-table-card-body">
            <Table
              className="student-table"
              columns={columns}
              dataSource={filtredStudents}
              pagination={false}
              locale
            />
          </div>
          <Pagination
            className="student-table-pagination"
            defaultCurrent={1}
            total={students.length}
            pageSize={4}
            style={{ marginBottom: "20px" }}
          />
        </div>
      </CardContainer>
    );
  }
}

export default SentDocuments;
