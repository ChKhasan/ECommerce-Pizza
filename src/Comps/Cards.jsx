import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { dataBase } from "../redux/dataSlice";


const Cards = (props) => {
const dispatch = useDispatch()
const addArr = (itemm,e) => {
   e.target.disabled = "true"
   document.getElementById("disabled").disabled = false
   console.log(e.target.disabled);
  dispatch(dataBase(itemm));
};
  return (
    <>



      <div className=" col-12 mt-5 col-lg-6 col-xl-3 rel">
        <div>{props.name}</div>

        <div
          className="modal fade"
          id={"id" + props.id}
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
                    <img style={{width: "100%"}} src={props.img} alt="" />
                  </div>
                  <div className="col-12 col-md-12 col-lg-6  d-flex flex-column justify-content-around align-items-around">
                    
                    <div>
                      <div className="row">
                        <div className="col-12 d-flex justify-content-between">
                          <h6 className="info_card_h6">Пепперони по-деревенски</h6>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-3">
                          <div className="info_card d-flex flex-column align-items-center">
                            <div>
                              <img  src="./Images/Group 83.png" alt="" />
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
                            <button className="btn  col-6" role='group'>Традиционное</button>
                            <button className="btn  col-6  " role='group'>Тонкое</button>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-12">
                          <div className="d-flex new_btn_style">
                            <button className="btn  col-4" >20 см </button>
                            <button className="btn  col-4" >28 см</button>
                            <button className="btn  col-4" >33 см</button>
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
                          Итого:{" "}
                          {props.price}{" "}
                          ₽
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


        <div className="card card2  rel">
          <div
            className="stat"
            id="pp"
            style={{ display: props.status ? "block":"none" }}
          >
            <p>{props.status}</p>
          </div>
          
          <img  type="button"
       
          data-bs-toggle="modal"
          data-bs-target={"#id" + props.id}  className="card-img-top" src={props.img} />

          <div className="card-body d-flex justify-content-between flex-column">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <button
                href="#"
                className="btn btn2 btn-primary"
                id={props.id}
                onMouseOver={props.anim}
                onClick={(e) => {
                  addArr({
                    title: props.title,
                    price: props.price,
                    text: props.text,
                    img: props.img,
                    quality: 1,
                    id: props.id,
                  },e);
                }}
              >
                Выбрать
              </button>
              <h6
                className="price"
                onClick={() => {
                  this.style.display = "none";
                }}
              >
                от {props.price} ₽
              </h6>
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" col-12 mt-5 col-lg-6 col-xl-3 rel">
        <SendCard />
      </div>
      {} */}
    </>
  );
};

export default Cards;
