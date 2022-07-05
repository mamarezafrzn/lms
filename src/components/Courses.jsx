import { SearchOutlined } from "@ant-design/icons";
import { Button, Form, Input, Layout, Modal, Table } from "antd";
import Item from "antd/lib/list/Item";
import type { ColumnsType } from "antd/lib/table";
import React, { useState } from "react";
import BackBtn from "./BackBtn";

import "../../src/styles/components/courses.css";

const columns = [
  {
    title: "درس",
    dataIndex: "name",
  },
  {
    title: "کد درس",
    dataIndex: "code",
  },
  {
    title: "نوع درس",
    dataIndex: "type",
  },
  {
    title: "واحد",
    dataIndex: "unit",
  },
  {
    title: "واحد تئوری",
    dataIndex: "speculative",
  },
  {
    title: "واحد عملی",
    dataIndex: "practicable",
  },
  {
    title: "پیش نیازها",
    dataIndex: "required",
  },
];

const staticCourses = [
  {
    key: 1,
    name: "درس",
    code: 101,
    type: "عمومی",
    unit: 1,
    speculative: 0,
    practicable: 0,
    required: "ندارد",
  },
  {
    key: 2,
    name: "2 زبان",
    code: 100,
    type: "تخصصی",
    unit: 3,
    speculative: 2,
    practicable: 1,
    required: "زبان 1",
  },
  {
    key: 3,
    name: "برنامه نویسی 1",
    code: 110,
    type: "تخصصی",
    unit: 3,
    speculative: 2,
    practicable: 1,
    required: "ندارد",
  },
  {
    key: 4,
    name: "برنامه نویسی 2",
    code: 120,
    type: "تخصصی",
    unit: 3,
    speculative: 2,
    practicable: 1,
    required: "برنامه نویسی 1",
  },
  {
    key: 5,
    name: "ریاضی 1",
    code: 130,
    type: "عمومی",
    unit: 2,
    speculative: 2,
    practicable: 0,
    required: "ندارد",
  },
];

var data = [];

for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `درس ${i}`,
    code: "00" + i,
    type: "عمومی",
    unit: 3,
    speculative: 2,
    practicable: 1,
    required: "ریاضی 1",
  });
}

const Courses = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [modalSelectedRowKeys, setModalSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [myData, setMyData] = useState(data);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [coursefilter, setCourseFilter] = useState("");
  const [codeFilter, setCodeFilter] = useState("");
  const [filteredData, setFilteredData] = useState(staticCourses);

  const start = () => {
    setLoading(true); // ajax request after empty completing
    const d = myData.filter((item) => !selectedRowKeys.includes(item.key));
    setMyData(d);

    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const onModalSelectChange = (newSelectedRowKeys) => {
    setModalSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const modalRowSelection = {
    modalSelectedRowKeys,
    onChange: onModalSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    const newData = staticCourses.filter((item) =>
      modalSelectedRowKeys.includes(item.key)
    );

    setMyData([...myData, ...newData]);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleFilter = (event) => {
    event.preventDefault();

    if (coursefilter && codeFilter) {
      setFilteredData(staticCourses.filter(
        (item) => coursefilter == item.name && codeFilter == item.code
      ))
    }else if(coursefilter && !codeFilter){
      setFilteredData(staticCourses.filter(
        (item) => coursefilter == item.name
      ))
    }else if(!coursefilter && codeFilter){
      setFilteredData(staticCourses.filter(
        (item) => codeFilter == item.code
      ))
    }else{
      setFilteredData(staticCourses)
    }
    
  };

  const searhForm = (
    <Form
      onSubmit={handleFilter}
      name="basic"
      labelCol={{
        span: 10,
      }}
      wrapperCol={{
        span: 20,
      }}
      initialValues={{
        remember: true,
      }}
      layout="inline"
      autoComplete="off">
      {" "}
      <Form.Item name="course">
        <Input
          placeholder="نام درس"
          value={coursefilter}
          onChange={(event) => setCourseFilter(event.target.value)}
        />
      </Form.Item>
      <Form.Item name="courseCode">
        <Input
          placeholder="کد درس"
          value={codeFilter}
          onChange={(event) => setCodeFilter(event.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button
          style={{ marginTop: "5px" }}
          type="primary"
          shape="circle"
          htmlType="submit">
          <SearchOutlined
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </Button>
      </Form.Item>
    </Form>
  );

  return (
    <div>
      <BackBtn to="/student" />
      <div>
        <div
          style={{
            marginBottom: 16,
          }}>
          <Button
            type="primary"
            onClick={start}
            disabled={!hasSelected}
            loading={loading}>
            حذف
          </Button>
          <Button
            style={{ float: "left" }}
            type="primary"
            onClick={showModal}
            loading={loading}>
            افزودن
          </Button>
          <Modal
            title={searhForm}
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <Button
                key="submit"
                type="primary"
                loading={loading}
                onClick={handleOk}>
                ثبت
              </Button>,
            ]}>
            <Table
              style={{
                maxHeight: "500px",
                overflow: "scroll",
                direction: "rtl",
              }}
              rowSelection={modalRowSelection}
              columns={columns}
              dataSource={filteredData}
              size="small"
              pagination={{ defaultPageSize: 3, className: "pagination" }}
            />
          </Modal>
          <span
            style={{
              marginRight: 8,
            }}>
            {hasSelected ? `${selectedRowKeys.length} مورد انتخاب شده` : ""}
          </span>
        </div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={myData}
          pagination={{ className: "pagination" }}
        />
      </div>
    </div>
  );
};

export default Courses;
