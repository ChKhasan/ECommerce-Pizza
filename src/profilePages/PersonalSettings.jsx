import React, { useState } from "react";
import { Button, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { FormInput } from "../Comps";
import { TOKEN } from "../const/Token";
import { Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { takeDataClient } from "../redux/dataSlice";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  lineHeight: "60px",
}));

const PersonalSettings = () => {
  const [form] = Form.useForm();
  const [personalHSH, setPersonalHSH] = useState(false);
  const [passwordHSH, setPasswordHSH] = useState(false);
  const dispatch = useDispatch();

  const store = useSelector((state) => state.dataSlice.clientAccount);

  const getValue = () => {
    setPersonalHSH(true);
    form.setFieldsValue(store);
  };

  const onFinish = (values) => {
    localStorage.setItem(TOKEN, JSON.stringify(values));
    setPersonalHSH(false);
    dispatch(takeDataClient());
  };

  return (
    <div>
      <Item
        key={24}
        elevation={4}
        className="profile_card mb-5"
        style={{
          lineHeight: "0",
        }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <h6>Личные данные</h6>

          {!personalHSH && (
            <p className="edit_btn" onClick={() => getValue()}>
              <ModeEditOutlineOutlinedIcon style={{ color: "#FF7010" }} />{" "}
              Изменить
            </p>
          )}
        </div>

        {!personalHSH && (
          <div
            className="d-flex profile_card_footer w-100  position-relative"
            style={{ marginTop: "16px" }}
          >
            <div
              className="d-flex flex-column "
              style={{ marginRight: "64px" }}
            >
              <p>Имя*</p>
              <span>{store.name}</span>
            </div>
            <div
              className="d-flex flex-column "
              style={{ marginRight: "64px" }}
            >
              <p>Номер телефона*</p>
              <span>{store.phone}</span>
            </div>
            <div
              className="d-flex flex-column "
              style={{ marginRight: "64px" }}
            >
              <p>Почта</p>
              <span>{store.email}</span>
            </div>
            <div
              className="d-flex flex-column "
              style={{ marginRight: "64px" }}
            >
              <p>Дата рождения</p>
              <span>14.05.1999</span>
            </div>
          </div>
        )}
        {personalHSH && (
          <div className="row mt-3">
            <Form
              form={form}
              name="basic"
              layout="vertical"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 22 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <div className="row">
                <div className="col-4 form-group labelInput">
                  <Form.Item
                    label="Username"
                    name="name"
                    className="form-group labelInput"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input className="form-group labelInput" />
                  </Form.Item>
                </div>
                <div className="col-4">
                  <Form.Item
                    label="Phone Number"
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </div>
                <div className="col-4">
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </div>
              </div>

              <Form.Item>
                <Button
                  className="button_group_profile_active button_group_profile mt-4"
                  type="primary"
                  htmlType="submit"
                >
                  Сохранить изменения
                </Button>
              </Form.Item>
            </Form>
          </div>
        )}
      </Item>
      <Item elevation={4} className="profile_card mb-5">
        <div className="d-flex justify-content-between align-items-center">
          <h6>Пароль</h6>

          {!passwordHSH && (
            <p className="edit_btn" onClick={() => setPasswordHSH(true)}>
              <ModeEditOutlineOutlinedIcon style={{ color: "#FF7010" }} />{" "}
              Изменить
            </p>
          )}
        </div>
        {passwordHSH && (
          <div className="row">
            <div className="col-4">
              <FormInput
                label={"Старый пароль*"}
                placeholder={"******"}
                id={"forname"}
                type={"password"}
              />
            </div>
            <div className="col-4">
              <FormInput
                label={"Новый пароль*"}
                placeholder={"******"}
                id={"fornomer"}
                type={"password"}
              />
            </div>
            <div className="col-4">
              <FormInput
                label={"Подтвердите пароль*"}
                placeholder={"******"}
                id={"foremail"}
                type={"password"}
              />
            </div>
            <div>
              <Button
                className="button_group_profile_active button_group_profile mt-4"
                onClick={() => setPasswordHSH(false)}
              >
                Сохранить изменения
              </Button>
            </div>
          </div>
        )}
      </Item>
      <Item elevation={4} className="profile_card mb-5">
        <div className="d-flex justify-content-between align-items-center">
          <h6>Подписки</h6>
        </div>
      </Item>
    </div>
  );
};

export default PersonalSettings;
