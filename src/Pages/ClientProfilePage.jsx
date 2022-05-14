import React from "react";
import { Link, useLocation } from "react-router-dom";

const ClientProfilePage = ({ children }) => {
  return (
    <div className="container-fluid c-color pt-30 pb-30 ">
      <div className="container-xxl ptt">
        <div className="row">
          <div className="col-12 d-flex justify-content-between ">
            <h1>Мой аккаунт</h1>
            <ButtonGroup />
          </div>
        </div>

        <div className="row">
          <div className="col-12">{children}</div>
        </div>
      </div>
    </div>
  );
};

const ButtonGroup = () => {
  const location = useLocation();

  return (
    <div className="button_group_profile">
      <Link
        to="/clientprofile/orferhistory"
        className={
          location.pathname === "/clientprofile/orferhistory"
            ? "button_group_profile_active"
            : ""
        }
      >
        История заказов
      </Link>

      <Link
        to="/clientprofile/personalsettings"
        className={
          location.pathname === "/clientprofile/personalsettings"
            ? "button_group_profile_active"
            : ""
        }
      >
        Настройки
      </Link>
    </div>
  );
};
export default ClientProfilePage;
