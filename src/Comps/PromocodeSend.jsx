import React from "react";
import { useSelector } from "react-redux";

const PromocodeSend = () => {
 
  const selected = useSelector(state => state.dataSlice.selected)

  return (
    <>
      <div className="container-fluid c-color pt-30 pb-30">
        <div className="container-xxl ptt">
          <div  className="row promo-code-box">
              <div className="col-md-6">
                  <div className="d-flex align-items-center justify-content-between "> 
                      <div style={{marginLeft: "24px"}} className="promo-input d-flex align-items-center justify-content-between">
                          <input type="text" placeholder="Промокод"/>
                          <img style={{width: "46px",heigth: '46px'}} src="./Images/Group 48.png" alt="" />
                      </div>

                  </div>
              </div>
                      <div className="col-md-6 d-md-flex d-flex d-none justify-content-end">
                      <h4>Итого: {selected.reduce((a, b) => {
                    return a + b.price * b.quality;
                  }, 0)} ₽</h4>
              </div>
              <div className="col-md-6 d-md-none mt-4 d-flex justify-content-center">
                      <h4>Итого: {selected.reduce((a, b) => {
                    return a + b.price * b.quality;
                  }, 0)} ₽</h4>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromocodeSend;
