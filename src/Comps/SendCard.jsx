import React from "react";
import { useDispatch } from "react-redux";
import { addProduct, unAddProduct } from "../redux/dataSlice";
function SendCard(props) {
  const dispatch = useDispatch();
  const addPro = (itemId) => {
    dispatch(addProduct(itemId));
  };

  const unAddPro = (itemId) => {
    dispatch(unAddProduct(itemId));
  };
  return (
    <>
      <div className="sendPro mt-3">
        <div className="card card2 sendCard   d-flex flex-row rel">
          <div className="d-flex align-items-center">
            <div>
              <img className="card-img-top" src={props.img} />
            </div>
          </div>
          <div className="card-bod d-flex col-9  justify-content-between flex-column">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div className="addProm d-flex justify-content-around">
                <button onClick={() => unAddPro(props.id)}>-</button>
                {props.quality}
                <button onClick={() => addPro(props.id)}>+</button>
              </div>
              <h6 className="price">от {props.price} ₽</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SendCard;
