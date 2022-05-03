import React from "react";
import useDrawer from "../hooks/useDrawer";
import ButtonFilter from "./ButtonFilter";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { filterCartigoriy, filterTitle } from "../data/Products";

const Cardbox = (props) => {
  const [toggleDrawer,list,state] = useDrawer( <div className="px-3 py-3 mb-5"><h3>Фильтры</h3>{filterTitle.map((iteem) => (
    <div className="row">
      <div className="row">
        <div className="col-12">
          <label
            className="labelInput"
            style={{ marginTop: "15px" }}
          >
            {iteem.title}
          </label>
        </div>
      </div>
      <div className="col-12 d-flex flex-wrap">
        {filterCartigoriy
          .filter((title1) => title1.title == iteem.title)
          .map((nameB) => (
            <ButtonFilter
              name={nameB.name}
              color={props.color}
            />
          ))}
      </div>
    </div>
  ))}     <div className="absSum  d-flex justify-content-around align-items-center  ">
  <button
    className="btn btn2 outline-btn"
    onClick={() => props.propro(props.mahsulotlar)}
  >
    Сбросить
  </button>{" "}
  <button
    className="btn btn2 btn-primary"
    onClick={() => props.propro(props.mahsulotlar)}
  >
    Применить
  </button>
</div></div>,350)
  return (
    <>
      <div className="container-fluid c-color pt-30 pb-30">
        <div className="row">
        <div className="container-xxl ptt">
          <div className="row">
            <div
              className="col-12 d-flex justify-content-between"
              id={props.name}
            >
              <h1>{props.name}</h1>
                  <React.Fragment key={"right"}>
                    <Button onClick={toggleDrawer("right", true)}>
            
              <button
                className="btn "
                type="button"
               
              >
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

             

            </div>
          </div>
          <div className="row ">{props.cardd}</div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Cardbox;
