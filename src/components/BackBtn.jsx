import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

const BackBtn = ({ to }) => {
  return (
    <div style={{ direction: "ltr", marginBottom: "15px" }}>
      <Link to={to}>
        <Button icon="left" type="link">
          بازگشت
        </Button>
      </Link>
    </div>
  );
};

export default BackBtn;
