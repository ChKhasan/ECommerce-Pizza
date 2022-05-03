import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';


const Menu = () => {
    return (
        <>
              <div className='container-fluid c-color pt-30  d-none d-sm-block'>
                <div className='container-xxl ptt'>
                    <div className="row">
        
                    <ScrollContainer className="scroll-container w-100 d-flex justify-content-between">
     
                    <div className="col-lg-12  d-flex  justify-content-between ">
                        <div className='menu_card12 d-inline '>
                            <div className='in_card d-flex justify-content-center align-items-center flex-column'>
                            <img src="Images/Group 96.png" alt="" />
                            <a href='#Акции'>Акции</a>
                            </div>
                        </div>
                        <div className='menu_card12 d-inline '>
                            <div className='in_card d-flex  align-items-center flex-column'>
                            <img src="Images/Group 98.png" alt="" />
                            <a href='#Пицца'>Пицца</a>
                            </div>
                        </div>
                        <div className='menu_card12 d-inline '>
                            <div className='in_card d-flex align-items-center flex-column'>
                            <img src="Images/Group 101.png" alt="" />
                            <a href='#Суши'>Суши</a>
                            </div>
                        </div>
                        <div className='menu_card12 d-inline '>
                            <div className='in_card d-flex  align-items-center flex-column'>
                            <img src="Images/Group 99.png" alt="" />
                            <a href='#Напитки'>Напитки</a>
                            </div>
                        </div>
                  
                        <div className='menu_card12 d-inline '>
                            <div className='in_card d-flex  align-items-center flex-column'>
                            <img src="Images/Group 107.png" alt="" />
                            <a href='#Закуски'>Закуски</a>
                            </div>
                        </div>
                        <div className='menu_card12 d-inline '>
                            <div className='in_card d-flex  align-items-center flex-column'>
                            <img src="Images/Group 100.png" alt="" />
                            <a href='#Комбо'>Комбо</a>
                            </div>
                        </div>
                        <div className='menu_card12 d-inline '>
                            <div className='in_card d-flex justify-content-center align-items-center flex-column'>
                            <img src="Images/Group 104.png" alt="" />
                            <a href='#Десерты'>Десерты</a>
                            </div>
                        </div>
                        <div className='menu_card12 d-inline '>
                            <div className='in_card d-flex justify-content-center align-items-center flex-column'>
                            <img src="Images/Group 105.png" alt="" />
                            <a href='#Соусы'>Соусы</a>
                            </div>
                        </div>
                        </div>
      </ScrollContainer>


                    </div>
                </div>
            </div>
        </>
    );
};

export default Menu;