import React, { useState } from "react";
import { Button, Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { TOKEN } from "../const/Token";


const { Header, Sider, Content } = Layout;
const APanelLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  const logOut = () => {
    localStorage.removeItem(TOKEN);
    navigate("/login");
  };

  return (
    <>
      <div
        style={{
          position: "absolute",
          height: "64px",
          width: "100%",
          background: "white",
          zIndex: "0",
        }}
      ></div>
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            zIndex: 10,
            theme: "light",
          }}
        >
          <div className="logo" style={{ background: "transparent" }}>
            <Menu
              theme="dark"
              mode="inline"
              style={{ background: "white", height: "130px" }}
              defaultSelectedKeys={["1"]}
              className="d-flex justify-content-center align-items-center flex-column"
            >
              <Link to="/">
                <img
                  src="../../Group 2.png"
                  alt=" "
                  style={{ width: "50px", height: "50px" }}
                />
                <br />
              </Link>
              {!collapsed && (
                <img
                  className="mt-3"
                  src="../../Images/Куда пицца.png"
                  alt=" "
                />
              )}
            </Menu>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            {" "}
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/admin">Pizza</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to="/admin/sushi">Sushi</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<VideoCameraOutlined />}>
              <Link to="/admin/snacks">Snacks</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />}>
              <Link to="/admin/drinks">Drinks</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<VideoCameraOutlined />}>
              <Link to="/admin/combo">Combo</Link>
            </Menu.Item>
            <Menu.Item key="6" icon={<VideoCameraOutlined />}>
              <Link to="/admin/desserts">Desserts</Link>
            </Menu.Item>
            <Menu.Item key="7" icon={<UserOutlined />}>
              <Link to="/admin/sauces">Sauces</Link>
            </Menu.Item>
           
          </Menu>
        </Sider>
        <Layout
          className="site-layout"
          style={{
            marginLeft: 200,
          }}
        >
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: toggle,
              }
            )}
          </Header>

          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default APanelLayout;
