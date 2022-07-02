import React from "react";
import { Route } from "react-router";
import { Layout } from "antd";
import AdminSider from "../components/AdminSider";

const AdminRouter = (props) => {
  const { Content, Sider } = Layout;
  return (
    <Layout style={{ backgroundColor: "transparent", height: "100%" }}>
      <Sider breakpoint="sm" width={250}>
        <AdminSider />
      </Sider>
      <Content style={{ padding: "50px 20px" }}>
        <div className="">
          <Route {...props} />
        </div>
      </Content>
    </Layout>
  );
};

export default AdminRouter;
