import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./redux/dataSlice";
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";

const store = configureStore({
  reducer: {
    dataSlice,
  },
});
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
