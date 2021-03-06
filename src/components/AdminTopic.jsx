import { Button, Card, Col, Form, Input, Modal, Row } from "antd";
import { keys } from "ramda";
import React from "react";
import { useState } from "react";
import { useParams } from "react-router";
import BackBtn from "./BackBtn";

const AdminTopic = () => {
  const [topics, setTopics] = useState({
    221: [
      { topic: "سرفصل 1", description: "توضیحات 1", edit: false },
      { topic: "سرفصل 2", description: "توضیحات 2", edit: false },
      { topic: "سرفصل 3", description: "توضیحات 3", edit: false },
      { topic: "سرفصل 4", description: "توضیحات 4", edit: false },
      { topic: "سرفصل 5", description: "توضیحات 5", edit: false },
      { topic: "سرفصل 6", description: "توضیحات 6", edit: false },
    ],
    222: [
      { topic: "سرفصل 1", description: "توضیحات 1", edit: false },
      { topic: "سرفصل 2", description: "توضیحات 2", edit: false },
      { topic: "سرفصل 3", description: "توضیحات 3", edit: false },
      { topic: "سرفصل 4", description: "توضیحات 4", edit: false },
      { topic: "سرفصل 5", description: "توضیحات 5", edit: false },
      { topic: "سرفصل 6", description: "توضیحات 6", edit: false },
    ],
    223: [
      { topic: "سرفصل 1", description: "توضیحات 1", edit: false },
      { topic: "سرفصل 2", description: "توضیحات 2", edit: false },
      { topic: "سرفصل 3", description: "توضیحات 3", edit: false },
      { topic: "سرفصل 4", description: "توضیحات 4", edit: false },
      { topic: "سرفصل 5", description: "توضیحات 5", edit: false },
      { topic: "سرفصل 6", description: "توضیحات 6", edit: false },
    ],
    224: [
      { topic: "سرفصل 1", description: "توضیحات 1", edit: false },
      { topic: "سرفصل 2", description: "توضیحات 2", edit: false },
      { topic: "سرفصل 3", description: "توضیحات 3", edit: false },
      { topic: "سرفصل 4", description: "توضیحات 4", edit: false },
      { topic: "سرفصل 5", description: "توضیحات 5", edit: false },
      { topic: "سرفصل 6", description: "توضیحات 6", edit: false },
    ],
  });
  const [topic, setTopic] = useState();
  const [description, setDescription] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const newTopic = { ...topics };
  const showEditHandler = (id, index) => {
    newTopic[id][index].edit = !newTopic[id][index].edit;
    setTopics((prev) => ({ ...prev, newTopic }));
  };

  const { course, id } = useParams();

  const deleteHandler = (id, index) => {
    newTopic[id].splice(index, 1);
    setTopics((prev) => ({ ...prev, newTopic }));
  };

  const onFinishHandler = (id, index) => {
    newTopic[id][index].topic = topic;
    newTopic[id][index].description = description;
    newTopic[id][index].edit = !newTopic[id][index].edit;
    setTopics((prev) => ({ ...prev, newTopic }));
    setTopic("")
    setDescription("")
  };

  const newTopicHandler = () => {
    const addTopic = {topic , description ,edit:false}
    newTopic[id].push(addTopic)
    setTopics((prev) => ({ ...prev, newTopic }));
    setIsModalVisible(false)
  };


  const NewTopicModal = (
    <Modal
      title="افزودن سرفصل"
      okText="ثبت"
      cancelText="خروج"
      visible={isModalVisible}
      onOk={newTopicHandler}
      onCancel={() => setIsModalVisible(false)}>
<div className="flex-column" style={{ padding: 20 }}>

                  <div className="flex-row">
                    <div className="flex-column">
                      <Form>
                      <Form.Item
                      name="topic"
                      wrapperCol={{
                        offset: 0,
                        span: 16,
                      }}
                      rules={[
                        {
                          required: true,
                          message: "سرفصل را وارد کنید!",
                        },
                      ]}>
                      <label htmlFor="username">سرفصل</label>
                      <Input onChange={(e) => setTopic(e.target.value)} />
                    </Form.Item>{" "}
                    <Form.Item
                      name="description"
                      wrapperCol={{
                        offset: 0,
                        span: 16,
                      }}
                      rules={[
                        {
                          required: true,
                          message: "توضیحات را وارد کنید!",
                        },
                      ]}>
                      <label htmlFor="username">توضیحات</label>
                      <Input.TextArea
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </Form.Item>

                      </Form>
                    </div>
                  </div>
                </div>
    </Modal>
  );

  return (
    <div className="site-card-wrapper">
      <BackBtn to="/admin/admin-courses" />
      <Row gutter={24}>
        <h2>{course}</h2>
        <Button style={{float:"left"}} onClick={()=>setIsModalVisible(!isModalVisible)}>افزودن</Button>
        {NewTopicModal}
        {topics[id] ? (
          topics[id].map((item, index) => (
            <Col span={24} key={index} style={{ marginTop: "10px" }}>
              <Card
                title={item.topic}
                bordered={false}
                style={{ borderRadius: "10px" }}>
                {item.description}
                <Button
                  style={{ float: "left", cursor: "pointer", border: "none" }}
                  onClick={() => deleteHandler(id, index)}>
                  <i style={{ color: "red" }} class="far fa-trash"></i>
                </Button>
                <Button
                  style={{ float: "left", cursor: "pointer", border: "none" }}
                  onClick={() => showEditHandler(id, index)}>
                  <i class="far fa-edit"></i>
                </Button>
              </Card>
              {item.edit && (
                <Card>
                  <Form
                    name="horizontal_topic"
                    layout="inline"
                    onSubmit={() => onFinishHandler(id, index)}>
                    <Form.Item
                      name="topic"
                      rules={[
                        {
                          required: true,
                          message: "سرفصل را وارد کنید!",
                        },
                      ]}>
                      <label htmlFor="username">سرفصل</label>
                      <Input onChange={(e) => setTopic(e.target.value)} />
                    </Form.Item>{" "}
                    <Form.Item
                      name="description"
                      rules={[
                        {
                          required: true,
                          message: "توضیحات را وارد کنید!",
                        },
                      ]}>
                      <label htmlFor="username">توضیحات</label>
                      <Input.TextArea
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </Form.Item>{" "}
                    <Form.Item style={{ float: "left" }}>
                      <Button onClick={() => onFinishHandler(id, index)}>
                        ثبت
                      </Button>
                    </Form.Item>
                  </Form>
                </Card>
              )}
            </Col>
          ))
        ) : (
          <p>یافت نشد</p>
        )}
      </Row>
    </div>
  );
};

export default AdminTopic;
