import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { dataBase } from "../redux/dataSlice";

function SendCard(props) {
  const dispatch = useDispatch();
  const addArr = (itemm, e) => {
    dispatch(dataBase(itemm));
    document.getElementById("disabled").disabled = false;

    e.target.disabled = "true";
  };
  return (
    <>
      <div
        className="modal fade"
        id={"idd" + props.id}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal_res">
          <div className="modal-content">
            <div className="modal-body">
              <div
                className="stat"
                id="pp"
                style={{ display: props.display || "none" }}
              >
                <p>{props.status}</p>
              </div>
              <div className="row ">
                <div className="col-12 col-md-12 col-lg-6  d-flex align-items-center justify-content-center">
                  <img style={{ width: "100%" }} src={props.img} alt="" />
                </div>
                <div className="col-12 col-md-12 col-lg-6  d-flex flex-column justify-content-around align-items-around">
                  <div>
                    <div className="row">
                      <div className="col-12 d-flex justify-content-between">
                        <h6 className="info_card_h6">
                          Пепперони по-деревенски
                        </h6>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <div className="info_card d-flex flex-column align-items-center">
                          <div>
                            <img src="./Images/Group 83.png" alt="" />
                          </div>
                          <p>Моцарелла</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="info_card d-flex flex-column align-items-center">
                          <div>
                            <img src="./Images/Group 89.png" alt="" />
                          </div>
                          <p>Огурцы маринованные </p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="info_card d-flex flex-column align-items-center">
                          <div>
                            <img src="./Images/Group 90.png" alt="" />
                          </div>
                          <p>Пепперони</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="info_card d-flex flex-column align-items-center">
                          <div>
                            <img src="./Images/Group 91.png" alt="" />
                          </div>
                          <p>Томатный соус</p>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-12">
                        <div className="d-flex new_btn_style">
                          <button className="btn  col-6" role="group">
                            Традиционное
                          </button>
                          <button className="btn  col-6  " role="group">
                            Тонкое
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-12">
                        <div className="d-flex new_btn_style">
                          <button className="btn  col-4">20 см </button>
                          <button className="btn  col-4">28 см</button>
                          <button className="btn  col-4">33 см</button>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-12 add_pizza">
                        <h6>Добавьте в пиццу</h6>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-3">
                        <div className="info_card d-flex flex-column align-items-center">
                          <div>
                            <img src="./Images/Group 83.png" alt="" />
                          </div>
                          <p>Моцарелла</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="info_card d-flex flex-column align-items-center">
                          <div>
                            <img src="./Images/Group 727.png" alt="" />
                          </div>
                          <p>Огурцы маринованные </p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="info_card d-flex flex-column align-items-center">
                          <div>
                            <img src="./Images/Group 728.png" alt="" />
                          </div>
                          <p>Пепперони</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="info_card d-flex flex-column align-items-center">
                          <div>
                            <img src="./Images/Group 729.png" alt="" />
                          </div>
                          <p>Томатный соус</p>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-12  d-flex justify-content-between align-items-center  ">
                        <h5
                          style={{
                            fontFamily: "Inter",
                            fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight: "28px",
                            letterSpacing: "0px",
                            textAlign: "left",
                            color: "#FF7010",
                          }}
                        >
                          Итого: {props.price} ₽
                        </h5>
                        <button
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                          className="btn btn2 btn-primary text-reset"
                          onClick={() => props.propro(props.mahsulotlar)}
                        >
                          <Link to="/homecart">Добавить</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sendPro mt-3">
        <div className="card card2 sendCard   d-flex flex-row rel">
          <div className="d-flex align-items-center">
            <div>
              <img
                className="card-img-top"
                type="button"
                data-bs-toggle="modal"
                data-bs-target={"#idd" + props.id}
                src={props.img}
              />
            </div>
          </div>
          <div className="card-bod d-flex col-9  px-2 justify-content-between flex-column">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <button
                className="price price_style"
                id={props.id}
                onMouseOver={props.anim}
                onClick={(e) => {
                  addArr(
                    {
                      title: props.title,
                      price: props.price,
                      text: props.text,
                      img: props.img,
                      quality: 1,
                      id: props.id,
                    },
                    e
                  );
                }}
              >
                от {props.price} ₽
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SendCard;
