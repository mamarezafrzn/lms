import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Layout } from "antd";
import AdminRouter from "./AdminRouter";
import StudentRouter from "./StudentRouter";
import LoginPage from "../components/LoginPage";
import StudentDashboard from "../components/StudentDashboard";
// import Messages from "../components/Messages";
import RegisterDocuments from "../components/RegisterDocuments";
import NavBar from "../components/NavBar";
import StudentList from "../components/StudentList";
import StudentPage from "../components/StudentPage";
import UploadSanjesh from "../components/UploadSanjesh";
import AdminsTable from "../components/AdminsTable";
import SupportPage from "../components/SupportPage";
import Profile from "../components/Profile"
import Courses from "../components/Courses";
const history = createBrowserHistory();




const renderLoginPage = () => {
  const { Header, Content } = Layout;
  return (
    <Layout style={{ backgroundColor: "transparent" }}>
      <Header style={{ backgroundColor: "transparent" }}>
        <NavBar withoutUser />
      </Header>
      <Content>
        <LoginPage />
      </Content>
    </Layout>
  );
};

const AppRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" render={() => renderLoginPage()} exact={true} />
        <StudentRouter
          path="/student"
          component={StudentDashboard}
          exact={true}
        />
        <StudentRouter path="/profile" component={Profile} exact={true} />
        <StudentRouter path="/courses" component={Courses} exact={true} />
        <StudentRouter
          path="/register-documents"
          component={RegisterDocuments}
          exact={true}
        />
        <AdminRouter path="/admin" component={StudentList} exact />
        <AdminRouter path="/admin/student/:id" component={StudentPage} exact />
        <AdminRouter
          path="/admin/upload-sanjesh"
          component={UploadSanjesh}
          exact
        />
        <AdminRouter path="/admin/admins-table" component={AdminsTable} exact />
        <AdminRouter path="/admin/support" component={SupportPage} exact />
      </Switch>
    </Router>
  );
};

export default AppRouter;
