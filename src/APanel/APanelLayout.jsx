import React, { useState } from "react";
import { Button, Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  DingtalkOutlined,
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
    <div className="container-xxl">
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item
                key="0"
                icon={
                  <DingtalkOutlined
                    twoToneColor="#fff"
                    style={{
                      marginLeft: "-10px",
                      fontSize: "40px",
                      color: "#fff",
                    }}
                  />
                }
              >
                <Link to="/">CRUD</Link>
              </Menu.Item>
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
            <Menu.Item key="8">
              <Button onClick={logOut}>LogOut</Button>
            </Menu.Item>
            <Menu.Item key="9">
              <Button
                onClick={() => {
                  navigate("/homepage");
                }}
              >
                Home Page
              </Button>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
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
    </div>
  );
};

export default APanelLayout;
