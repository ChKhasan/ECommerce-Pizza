import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { TOKEN } from "../const/Token";

const Login = () => {
  const navigate = useNavigate()

  const onFinish = (values) => {
    localStorage.setItem(TOKEN,JSON.stringify(values))
    navigate("/admin/pizza")
  };
  return (
    <div className="container-xxl ">
      <div
        style={{ height: "100vh" }}
        className="row d-flex justify-content-center align-items-center"
      >
        <div className="col-4  justify-content-center ">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
            <Link className="d-inline" to="/homepage">
                back
              </Link>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button mx-3"
              >
                Log in
              </Button>
              <span className="mx-3">or</span>{" "}
              <Link className="d-inline" to="/regis">
                register now!
              </Link>
            </Form.Item>
          </Form>{" "}
        </div>
      </div>
    </div>
  );
};

export default Login;

