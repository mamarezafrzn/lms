import React from "react";
import { Route } from "react-router";
import { Layout } from "antd";
import NavBar from "../components/NavBar";

const StudentRouter = (props) => {
  const { Header, Content } = Layout;
  return (
    <Layout style={{ backgroundColor: "transparent" }}>
      <Header style={{ backgroundColor: "transparent" }}>
        <NavBar />
      </Header>
      <Content>
        <div className="student-dashboard-container">
          <Route {...props} />
        </div>
      </Content>
    </Layout>
  );
};

export default StudentRouter;
