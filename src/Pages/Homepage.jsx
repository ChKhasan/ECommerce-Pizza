import React from "react";
import { Adress, Cashbek, Catigory, Dostavka, Menu } from "../Comps";

const Homepage = (props) => {
  return (
    <>
      <Menu />
      <Cashbek />
      <Adress/>
      <Catigory
        anim={props.anim}
        catigorys={props.catigorys}
        product={props.product}
        color={props.color}
      />
      <Dostavka />
    </>
  );
};

export default Homepage;
