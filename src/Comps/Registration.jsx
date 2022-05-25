import React from "react";
import { Form, Input, Button } from "antd";
import { TOKEN } from "../const/Token";
import { useNavigate } from "react-router-dom";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
const Registration = () => {
  const navigate = useNavigate()
  const onFinish = (values) => {
  localStorage.setItem(TOKEN,JSON.stringify(values))
  navigate("/homepage")
  
  };
  return (
    <div className="container-xxl ">
      <div
        style={{ height: "100vh" }}
          className="row d-flex justify-content-center align-items-center"
      >
        <div
          className="col-6 justify-content-center align-items-center"
        >
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item
            className="form-group labelInput"
              name={"name"}
              label="Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input className="form-group labelInput"/>
            </Form.Item>
            <Form.Item
              name={"email"}
              label="Email"
              rules={[
                {
                  type: "email",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item name={"phone"} label="Number Phone">
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="Password verification"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
