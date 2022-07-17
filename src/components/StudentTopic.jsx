import { Card, Col, Row } from "antd";
import { keys } from "ramda";
import React from "react";
import { useParams } from "react-router";
import BackBtn from "./BackBtn";

const StudentTopic = () => {
  const topics = {
    "001": [
      { topic: "سرفصل 1", description: "توضیحات 1" },
      { topic: "سرفصل 2", description: "توضیحات 2" },
      { topic: "سرفصل 3", description: "توضیحات 3" },
      { topic: "سرفصل 4", description: "توضیحات 4" },
      { topic: "سرفصل 5", description: "توضیحات 5" },
      { topic: "سرفصل 6", description: "توضیحات 6" },
    ],
    "002": [
      { topic: "سرفصل 1", description: "توضیحات 1" },
      { topic: "سرفصل 2", description: "توضیحات 2" },
      { topic: "سرفصل 3", description: "توضیحات 3" },
      { topic: "سرفصل 4", description: "توضیحات 4" },
      { topic: "سرفصل 5", description: "توضیحات 5" },
      { topic: "سرفصل 6", description: "توضیحات 6" },
    ],
    "003": [
      { topic: "سرفصل 1", description: "توضیحات 1" },
      { topic: "سرفصل 2", description: "توضیحات 2" },
      { topic: "سرفصل 3", description: "توضیحات 3" },
      { topic: "سرفصل 4", description: "توضیحات 4" },
      { topic: "سرفصل 5", description: "توضیحات 5" },
      { topic: "سرفصل 6", description: "توضیحات 6" },
    ],
    "004": [
      { topic: "سرفصل 1", description: "توضیحات 1" },
      { topic: "سرفصل 2", description: "توضیحات 2" },
      { topic: "سرفصل 3", description: "توضیحات 3" },
      { topic: "سرفصل 4", description: "توضیحات 4" },
      { topic: "سرفصل 5", description: "توضیحات 5" },
      { topic: "سرفصل 6", description: "توضیحات 6" },
    ],
  };

  const { course, id } = useParams();

  console.log();
  return (
    <div className="site-card-wrapper">
        <BackBtn to="/courses"/>
      <Row gutter={24}>
        {topics[id]?(topics[id].map((item,index)=>
        <Col span={24} key={index} style={{marginTop:"10px"}}>
          <Card title={item.topic} bordered={false} style={{borderRadius:"10px"}}>
            {item.description}
          </Card>
        </Col>
        )) : <p>یافت نشد</p>}
        
      </Row>
    </div>
  );
};

export default StudentTopic;
