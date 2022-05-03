import React from 'react';
import addArrayData from '../HOC/addArrayData';

const Adress = (props) => {
  console.log(props);
    return (
        <>
              <div className='container-fluid c-color pt-30 pb-30'>
                <div className='container-xxl ptt'>
                    <div className="row adress"> 
                         <div className="col-md-3  d-flex justify-content-between  align-items-center ">
                             <h5 style={{fontSize: "15px"}}>Проверить адрес доставки</h5>
                         </div>
                               <div className='col-md-9 mt-3 d-flex   align-items-center  '>
                             <div className='d-flex search align-items-center justify-content-end w-100'>
                                 <div className='d-flex  align-items-center input w-100' >
                                     <div style={{width: '24px !important'}} className="img-n ">
                                     <img  src="Images/Location.import addArrayData from '../HOC/addArrayData';
png" alt="" />
                                     </div>
                                     <input type="text"  placeholder='Адрес'/>
                                 </div>
                                 <button className=''>Проверить</button>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default addArrayData(Adress);