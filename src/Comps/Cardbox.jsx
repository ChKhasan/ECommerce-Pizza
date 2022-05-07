import React from "react";
import useDrawer from "../hooks/useDrawer";
import ButtonFilter from "./ButtonFilter";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { filterCartigoriy, filterTitle } from "../data/Products";

const Cardbox = (props) => {
  const { color, name, cards } = props;
  const [toggleDrawer, list, state] = useDrawer(
    <FilterDrawer  color={color} />,
    350
  );
  return (
    <>
      <div className="container-fluid c-color pt-30 pb-30">
        <div className="row">
          <div className="container-xxl ptt">
            <div className="row">
              <div className="col-12 d-flex justify-content-between" id={name}>
                <h1>{name}</h1>
                <FilterButton
                  toggleDrawer={toggleDrawer}
                  state={state}
                  list={list}
                />
              </div>
            </div>
            <div className="row ">{cards}</div>
          </div>
        </div>
      </div>
    </>
  );
};

const FilterButton = ({ toggleDrawer, state, list }) => {
  return (
    <React.Fragment key={"right"}>
      <Button onClick={toggleDrawer("right", true)}>
        <button className="btn " type="button">
          <div className="filter d-flex align-items-center">
            <div>
              <img src="Images/Filter.png" alt="" />
            </div>

            <p>Фильтры</p>
          </div>
        </button>
      </Button>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </React.Fragment>
  );
};

const FilterDrawer = ({ color }) => {
  return (
    <div className="px-3 py-3 mb-5">
      <h3>Фильтры</h3>
      {filterTitle.map((item, index) => (
        <div key={index} className="row">
          <div className="row">
            <div className="col-12">
              <label className="labelInput" style={{ marginTop: "15px" }}>
                {item.title}
              </label>
            </div>
          </div>
          <div className="col-12 d-flex flex-wrap">
            {filterCartigoriy
              .filter((title1) => title1.title == item.title)
              .map((nameB, index) => (
                <ButtonFilter key={index} name={nameB.name} color={color} />
              ))}
          </div>
        </div>
      ))}{" "}
      <div className="absSum  d-flex justify-content-around align-items-center  ">
        <button className="btn btn2 outline-btn">Сбросить</button>{" "}
        <button className="btn btn2 btn-primary">Применить</button>
      </div>
    </div>
  );
};
export default Cardbox;
