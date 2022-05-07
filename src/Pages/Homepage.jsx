import React from "react";
import { Adress, Cashbek, Catigory, Dostavka, Menu } from "../Comps";

const Homepage = () => {
  return (
    <>
      <Menu />
      <Cashbek />
      <Adress />
      <Catigory />
      <Dostavka />
    </>
  );
};

export default Homepage;
