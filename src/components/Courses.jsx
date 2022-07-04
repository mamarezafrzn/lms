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
    key:1,
    name: "2 زبان",
    code: 100,
    type: "تخصصی",
    unit: 3,
    speculative: 2,
    practicable: 1,
    required: "زبان 1",
  },
  {
    key:2,
    name: "برنامه نویسی 1",
    code: 110,
    type: "تخصصی",
    unit: 3,
    speculative: 2,
    practicable: 1,
    required: "ندارد",
  },
  {
    key:3,
    name: "برنامه نویسی 2",
    code: 120,
    type: "تخصصی",
    unit: 3,
    speculative: 2,
    practicable: 1,
    required: "برنامه نویسی 1",
  },
  {
    key:4,
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
  // const [form] = Form.useForm();
  // const course = Form.useWatch('course', form);
  // const courseCode = Form.useWatch('courseCode', form);

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
    const newData = staticCourses.filter((item)=>modalSelectedRowKeys.includes(item.key))
    
    setMyData([...myData,...newData])
    
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const searhForm = (
    <Form
    //  form={form}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      layout="inline"
      autoComplete="off">
      {" "}
      <Form.Item
        name="course">
        <Input placeholder="نام درس" />
      </Form.Item>
      <Form.Item
        name="courseCode">
        <Input placeholder="کد درس" />
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
              dataSource={staticCourses}
              size="small"
              pagination={{ defaultPageSize: 3, className: "pagination" }}
            />
          </Modal>
          <span
            style={{
              marginLeft: 8,
            }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
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
