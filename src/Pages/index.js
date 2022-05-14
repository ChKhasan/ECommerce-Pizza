import React, { useEffect, useState } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import HomeCart from "./HomeCart";
import { useDispatch } from "react-redux";
import { product } from "../data/Products";
import Registration from "../Comps/Registration";
import Login from "../Comps/Login";
import APizza from "../APanel/APizza";
import APanelLayout from "../APanel/APanelLayout";
import ProtectedRoutes from "../APanel/ProtectedRoutes";
import AProtected from "../APanel/AProtected";
import Layout from "../Layout/Layout";
import ClientProfilePage from "./ClientProfilePage";
import OrderHistory from "../profilePages/OrderHistory";
import PersonalSettings from "../profilePages/PersonalSettings";
import OrderIsAccepted from "./OrderIsAccepted";

const PageBox = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 400;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false);
      document.getElementById("hide").style.opacity = 1;
    } else {
      setIsVisible(true);
      document.getElementById("hide").style.opacity = 0;
    }
  };

  const [nameCategory, setNameCategory] = useState(0);
  const takeName = (name) => {
    setNameCategory(name);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout takeName={takeName} id={"hide"}>
              <Outlet />
            </Layout>
          }
        >
          <Route path="/" element={<Navigate to="homepage" />} />
          <Route path="homepage" element={<Homepage product={product} />} />
          <Route
            path="homecart"
            element={<HomeCart product={product} nameCategory={nameCategory} />}
          />
            <Route path="orderisaccepted" element={<OrderIsAccepted/>} />

        <Route path="clientprofile" element={<ClientProfilePage ><Outlet /></ClientProfilePage>} >
            <Route path="/clientprofile" element={<Navigate replace to="orferhistory" />} />
            <Route path="orferhistory" element={<OrderHistory/>} />
            <Route path="personalsettings" element={<PersonalSettings/>} />
        </Route>
        </Route>


        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/">
            <Route
              path="admin"
              element={
                <APanelLayout>
                  <Outlet />
                </APanelLayout>
              }
            >
              <Route path="/admin" element={<Navigate replace to="pizza" />} />
              <Route path="pizza" element={<APizza category={"Пицца"} />} />
              <Route path="sushi" element={<APizza category={"Суши"} />} />
              <Route path="snacks" element={<APizza category={"Закуски"} />} />
              <Route path="drinks" element={<APizza category={"Напитки"} />} />
              <Route path="combo" element={<APizza category={"Комбо"} />} />
              <Route
                path="desserts"
                element={<APizza category={"Десерты"} />}
              />
              <Route path="sauces" element={<APizza category={"Соусы"} />} />
            </Route>
          </Route>
        </Route>

        <Route path="/" element={<AProtected />}>
          <Route path="login" element={<Login />} />
          <Route path="regis" element={<Registration />} />
        </Route>
      </Routes>
    </>
  );
};

// export default React.memo(PageBox);
export default PageBox;
