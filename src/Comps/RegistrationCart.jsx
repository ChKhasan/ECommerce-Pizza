import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, unAddProduct } from '../redux/dataSlice';

const RegistrationCart = (props) => {

  const dispatch = useDispatch()
  const addPro = (itemId) => {
    dispatch(addProduct(itemId));
  };

  const unAddPro = (itemId) => {
    dispatch(unAddProduct(itemId))
  };

    return (
        <>
        
        <div className=" col-12  rel mt-4">
        <div>{props.name}</div>

        <div className="card card2 border-none d-flex flex-row ">
        
          <div className='d-flex justify-content-center align-items-center '>
             <div> <img style={{width: '120px',margin: '16px'}} className="card-img-top" src={props.img} /></div>
        </div>
          <div className="card-body d-flex flex-wrap justify-content-between mr-4">
            <div className='d-flex justify-content-center flex-column col-12 col-md-8'>
                <h5 className="card-title">{props.title}</h5>
            <p className="card-text d-none d-md-block">{props.text}</p>
            </div>
            <div className="d-flex col-12 col-md-4 justify-content-end align-items-center mt-3">
            <div className="addProm col-5  col-md-6 border-r d-flex justify-content-around  ">
                <button onClick={() => unAddPro(props.id)}>-</button>
                {props.quality}
                <button onClick={() => addPro(props.id)}>+</button>
              </div>
              <h4
                className="price col-7 col-md-6 d-flex justify-content-end"
                onClick={() => {
                  this.style.display = "none";
                }}
              >
                 {props.price} 
              </h4>
            </div>
          </div>
        </div>
      </div>
        </>
    );
};


export default RegistrationCart;