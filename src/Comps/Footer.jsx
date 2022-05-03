import React from 'react';

const Footer = () => {
    return (
        <>
             <div className='container-fluid c-footer pt-30 pb-30'>
                <div className='container-xxl ptt'>
                    <div className="row">
                        <div className="col-12 col-xl-3 mt-4">
                            <div className=" d-flex align-items-center">
                                <img style={{marginRight: "10px"}} src="Images/Group 2.png" alt="" />
                          <h5>Куда пицца</h5></div>
                        </div>

                        <div className="col-xl-3 col-sm-4 d-flex flex-column footer-ul mt-4">
                          <h5>Куда пицца</h5>
                          <ul>
                              <li>
                                  <a href="#">О компании</a>
                              </li>
                              <li>
                                  <a href="#">Пользовательское соглашение</a>
                              </li>
                              <li>
                                  <a href="#">Условия гарантии</a>
                              </li>
                          </ul>
                        </div> 

                        <div className="col-xl-3 col-sm-4 d-flex flex-column footer-ul mt-4">
                          <h5>Помощь</h5>
                          <ul>
                              <li>
                                  <a href="#">Ресторан</a>
                              </li>
                              <li>
                                  <a href="#">Контакты</a>
                              </li>
                              <li>
                                  <a href="#">Поддержка</a>
                              </li>
                              <li>
                                  <a href="#">Отследить заказ</a>
                              </li>
                          </ul>
                        </div>

                        <div className="col-xl-3 col-sm-4 d-flex flex-column footer-ul mt-4">
                          <h5>Контакты</h5>
                          <ul>
                              <li>
                                  <img src="Images/Group 55.png" alt="" /> <a href="#">+7 (926) 223-10-11</a>
                              </li>
                              <li>
                              <img src="Images/Group 5.png" alt="" /> <a href="#">Москва, ул. Юных Ленинцев, д.99</a>
                              </li>
                              <li className='row'>

                              <div className="col-md-6"><img src="Images/Subtract.png" alt="" />  <a href="#">Facebok</a></div>
                              <div className="col-md-6"> <img src="Images/Vector.png" alt="" />  <a href="#">Instagram</a> </div>
                              </li>
                             
                          </ul>
                        </div>
                       
                    </div>
                    <div className="row"><p>© Copyright 2021 — Куда Пицца</p></div>
                </div>
            </div> 
        </>
    );
};


export default Footer;