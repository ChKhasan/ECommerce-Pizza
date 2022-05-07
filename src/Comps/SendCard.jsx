import React from "react";
import useGainDecrease from "../hooks/useGainDecrease";
const SendCard = (props) => {
  const { img, title, text, id, price, quality } = props;

  const { gain, decrease } = useGainDecrease();

  return (
    <>
      <div className="sendPro mt-3">
        <div className="card card2 sendCard   d-flex flex-row rel">
          <div className="d-flex align-items-center">
            <div>
              <img className="card-img-top" src={img} />
            </div>
          </div>
          <div className="card-bod d-flex col-9  justify-content-between flex-column">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div className="addProm d-flex justify-content-around">
                <button onClick={() => decrease(id)}>-</button>
                {quality}
                <button onClick={() => gain(id)}>+</button>
              </div>
              <h6 className="price">от {price} ₽</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SendCard;
