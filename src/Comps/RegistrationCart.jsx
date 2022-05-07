import React from "react";
import useGainDecrease from "../hooks/useGainDecrease";

const RegistrationCart = (props) => {
  const { name, id, img, title,quality, text, price } = props;

  const { gain, decrease } = useGainDecrease();

  return (
    <>
      <div className=" col-12  rel mt-4">
        <div>{name}</div>

        <div className="card card2 border-none d-flex flex-row ">
          <div className="d-flex justify-content-center align-items-center ">
            <div>
              {" "}
              <img
                style={{ width: "120px", margin: "16px" }}
                className="card-img-top"
                src={img}
              />
            </div>
          </div>
          <div className="card-body d-flex flex-wrap justify-content-between mr-4">
            <div className="d-flex justify-content-center flex-column col-12 col-md-8">
              <h5 className="card-title">{title}</h5>
              <p className="card-text d-none d-md-block">{text}</p>
            </div>
            <div className="d-flex col-12 col-md-4 justify-content-end align-items-center mt-3">
              <div className="addProm col-5  col-md-6 border-r d-flex justify-content-around  ">
                <button onClick={() => decrease(id)}>-</button>
                {quality}
                <button onClick={() => gain(id)}>+</button>
              </div>
              <h4
                className="price col-7 col-md-6 d-flex justify-content-end"
                onClick={() => {
                  this.style.display = "none";
                }}
              >
                {price}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationCart;
