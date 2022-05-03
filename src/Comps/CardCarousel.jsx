import React from 'react';


const CardCarousel = (props) => {
    return (
        <>
           <div className='col-11'>
           <div  className="card card2  rel">
          <div
            className="stat"
            id="pp"
            style={{ display: props.display || "none" }}
          >
            <p>{props.status}</p>
          </div>
          <img className="card-img-top" src={props.img} />
          <div className="card-body d-flex justify-content-between flex-column">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <button
                href="#"
                className="btn btn2 btn-primary w-100"
                id={props.id}
                onClick={() => {
                  props.addArr(
                    {
                    title: props.title,
                    price: props.price,
                    text: props.text,
                    img: props.img,
                    quality: 1,
                    id: props.id,
                  }
                  );
                }}
              >
                {props.price}
              </button>
              
            </div>
          </div>
        </div> </div>
        </> 
    );
};



export default CardCarousel;