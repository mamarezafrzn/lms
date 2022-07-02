import React, { Component } from "react";
import { Input, Button } from "antd";
import ShamsipourLogo from "./ShamsipourLogo";
import "../styles/components/login-page.scss";
import { fontSizes } from "../consts/styles/fonts";
import { Link } from "react-router-dom";

class LoginPage extends Component {
  state = { account: { username: "", password: "" } };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  render() {
    const { account } = this.state;
    return (
      <div className="login-page">
        <ShamsipourLogo
          width="140"
          firstFontSize={fontSizes.fonSizeH4}
          secondFontSize={fontSizes.fonSizeH5}
          login
        />
        <div className="form-wrapper">
          <form>
            <Input
              className="login-input"
              placeholder="نام کاربری"
              size="large"
              onChange={this.handleChange}
              name="username"
              value={account.username}
            />
            <Input
              className="login-input"
              placeholder="رمز عبور"
              size="large"
              onChange={this.handleChange}
              name="password"
              value={account.password}
            />
            <a href="#" className="password-forgot">
              رمز عبور خود را فراموش کرده اید؟
            </a>
            <Link to="/student">
              <Button type="primary" className="login-button">
                ورود
              </Button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
