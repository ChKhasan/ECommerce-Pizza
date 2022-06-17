import React, { useState } from "react";
import SendCard from "./SendCard";
import { Link, useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import useDrawer from "../hooks/useDrawer";
import { useDispatch, useSelector } from "react-redux";
import { nameCatigory } from "../data/Products";
import ScrollToTop from "react-scroll-to-top";
import { TOKEN } from "../const/Token";
import { Menu, Dropdown } from "antd";
import useAuth from '../hooks/useAuth';
import { deleteDataClient } from "../redux/dataSlice";


const Header = ({ id, takename }) => {
  const auth = useAuth()
  const navigate = useNavigate()
  const logOut = () => {
    localStorage.removeItem(TOKEN);
    dispatch(deleteDataClient())
    navigate("/homepage");
  };
  const menu = (
    <Menu
      items={[
        {
          label: (
            <>
              <Link
              to="/clientprofile"
                className="hundred_bonuses_link"
              >
                100 бонусов
              </Link>
              <Divider />
            </>
          ),
        },
        {
          label: auth ? <Link to="/clientprofile">История заказов</Link>:"",
        },
        {
          label: auth ? <Link to="/clientprofile/personalsettings">Настройки</Link>:"",
        },
  
        {
          label: auth ? <Button className="open_profile" onClick={logOut}>Войти в аккаунт</Button>:<Link to="/login">Войти в аккаунт</Link>
        },
      ]}
      />
      );
  const [toggleDrawer, list, state] = useDrawer(<NavbarDrawer menu={menu}/>, 250);

 const dispatch = useDispatch()




  const dataSlice = useSelector((state) => state.dataSlice);
  console.log(dataSlice);

  return (
    <div className="p-fixed container-fluid">
      <ScrollToTopButton />
      <div className="container-fluid hr_fluid xp-fixed">
        <div className="container-xxl ptt">
          <div className="row navbar-top d-none d-lg-flex">
            <div
              className="col-6 d-flex justify-content-between"
              style={{ padding: "6px" }}
            >
              <div className="img-n">
                <img src="Images/Group 1.png" alt="" />
              </div>
              <a href="#">Москва</a>
              <a href="#">Проверить адрес</a>
              <a href="#">Среднее время доставки*:</a>
            </div>
            <div
              className="col-4 d-flex justify-content-end"
              style={{ padding: "6px" }}
            >
              <a>Время работы: с 11:00 до 23:00</a>
            </div>
            <div className="col-2 d-flex justify-content-end navbar-top2">
              <div className="img-n" style={{ padding: "6px" }}>
                <img src="Images/Group 108.png" alt="" />
              </div>
              <Dropdown overlay={menu} placement="bottom" arrow>
               {auth ? <Button className="open_profile">{dataSlice.clientAccount.name}</Button>:
                <Button className="open_profile">Войти в аккаунт</Button>}
              </Dropdown>
      
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid sp-fixed">
        <div className="container-xxl ptt">
          <div className="row pt-20">
            <div className="col-lg-2 col-6">
              <Link to="/">
                <img src="../Images/Group 2.png" alt="" />
              </Link>

              <img src="Images/Куда пицца.png" alt="" />
            </div>
            <div className="col-lg-8 d-none d-lg-flex d-flex justify-content-around align-items-center ">
              <div
                className="col-12  d-lg-flex d-flex justify-content-around align-items-center "
                id={id}
              >
                <a href="#">Акции</a>
                {nameCatigory.map((item) => (
                  <a href="#" onClick={() => takename(item.name)}>
                    {item.name}
                  </a>
                ))}

                <DropdownComp />
              </div>
            </div>
            <div className="col-lg-2 col-6 d-flex justify-content-end">
              <div
                className="buy  d-none d-lg-flex"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
                style={{ cursor: "pointer" }}
              >
                <div className="img-n">
                  <img src="Images/Group 94.png" alt="" />
                </div>
                <h5>{dataSlice.countSum}$</h5>
              </div>

              <div
                className="offcanvas offcanvas-end"
                tabindex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
              >
                <div className="offcanvas-header">
                  <h3 id="offcanvasRightLabel">Ваш заказ</h3>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body mb-7 rel">
                  <div className="row">
                    <div className="col-12 d-flex flex-column  ">
                      {dataSlice.selected.map((item) => (
                        <SendCard {...item} />
                      ))}
                      <div className="absSum  d-flex justify-content-around align-items-center  ">
                        <h5
                          style={{
                            fontFamily: "Inter",
                            fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight: "28px",
                            letterSpacing: "0px",
                            textAlign: "left",
                            color: "#FF7010",
                          }}
                        >
                          Итого: {dataSlice.countSum} ₽
                        </h5>
                        <button
                          disabled={dataSlice.selected.length ? false : true}
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                          id="disabled"
                          className="btn  btn2 btn-primary text-reset"
                        >
                          <Link to="/homecart#">Оформить заказ</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-lg-none">
                <React.Fragment key={"right"}>
                  <Button onClick={toggleDrawer("right", true)}>
                    <img src="Images/Group 86.png" alt="" />
                  </Button>
                  <Drawer
                    anchor={"right"}
                    open={state["right"]}
                    onClose={toggleDrawer("right", false)}
                  >
                    {list("right")}
                  </Drawer>
                </React.Fragment>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
};

const ScrollToTopButton = () => {
  return (
    <ScrollToTop
      smooth
      top={900}
      color="#ff7010"
      style={{
        borderRadius: "50%",
        bottom: "100px",
        width: "56px",
        height: "56px",
      }}
    />
  );
};
const NavbarDrawer = () => {
  const auth = useAuth()
  const navigate = useNavigate()

 const dispatch = useDispatch()
  const dataSlice = useSelector((state) => state.dataSlice);
  const logOut = () => {
    localStorage.removeItem(TOKEN);
    dispatch(deleteDataClient())
    navigate("/homepage");
  };

  const menu = (
    <Menu
      items={[
        {
          label: (
            <>
              <Link
              to="/clientprofile"
                className="hundred_bonuses_link"
              >
                100 бонусов
              </Link>
              <Divider />
            </>
          ),
        },
        {
          label: auth ? <Link to="/clientprofile">История заказов</Link>:"",
        },
        {
          label: auth ? <Link to="/clientprofile/personalsettings">Настройки</Link>:"",
        },
  
        {
          label: auth ? <Button className="open_profile" onClick={logOut}>Войти в аккаунт</Button>:<Link to="/login">Войти в аккаунт</Link>
        },
      ]}
      />
      );
  return (
    <div>
      <List>
        <ListItem button key={"text"}>
          <ListItemIcon>
            <div className="img-n">
              <img src="Images/Group 108.png" alt="" />
            </div>
          </ListItemIcon>
          <div className="col-12 d-flex justify-content-start navbar-top2">
          <Dropdown overlay={menu} placement="bottom" arrow>
               {auth ? <Link to="/clientprofile/personalsettings">{dataSlice.clientAccount.name}</Link>
               :
               <Link to="/login">Войти в аккаунт</Link>}
              </Dropdown>
          </div>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key={"text"}>
          <ListItemIcon>
            <a className="dropdown-item a_menu" href="#">
              Акции
            </a>
          </ListItemIcon>
        </ListItem>
        <ListItem button key={"text"}>
          <ListItemIcon>
            <a className="dropdown-item a_menu" href="#">
              О компании
            </a>
          </ListItemIcon>
        </ListItem>
        <ListItem button key={"text"}>
          <ListItemIcon>
            <a className="dropdown-item a_menu" href="#">
              Пользовательское соглашение
            </a>
          </ListItemIcon>
        </ListItem>
        <ListItem button key={"text"}>
          <ListItemIcon>
            <a className="dropdown-item a_menu" href="#">
              Условия гарантии
            </a>
          </ListItemIcon>
        </ListItem>
        <ListItem button key={"text"}>
          <ListItemIcon>
            <a className="dropdown-item a_menu" href="#">
              Ресторан
            </a>
          </ListItemIcon>
        </ListItem>
        <ListItem button key={"text"}>
          <ListItemIcon>
            <a className="dropdown-item a_menu" href="#">
              Контакты
            </a>
          </ListItemIcon>
        </ListItem>
        <ListItem button key={"text"}>
          <ListItemIcon>
            <a className="dropdown-item a_menu" href="#">
              Поддержка
            </a>
          </ListItemIcon>
        </ListItem>
        <ListItem button key={"text"}>
          <ListItemIcon>
            <a className="dropdown-item a_menu" href="#">
              Поддержка
            </a>
          </ListItemIcon>
        </ListItem>
        {auth && <ListItem button key={"text"}>
          <ListItemIcon>
          <a className="dropdown-item a_menu" href="#" onClick={logOut}>Войти в аккаунт</a>
          </ListItemIcon>
        </ListItem> }
      </List>
    </div>
  );
};
const DropdownComp = () => {
  return (
    <div className="dropdown">
      <div
        className="btn  dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Другое
      </div>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <a className="dropdown-item" href="#">
            Акции
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            О компании
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Пользовательское соглашение
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Условия гарантии
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Ресторан
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Контакты
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Поддержка
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Отследить заказ
          </a>
        </li>
      </ul>
    </div>
  );
};
const Hed  = React.memo(Header);
export default Hed
