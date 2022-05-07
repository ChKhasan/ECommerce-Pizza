
const CardCarousel = props => {
  const {img,title,text,display,status,id,price,addElementToData} = props;
    return (
        <>
           <div className='col-11'>
           <div  className="card card2  rel">
          <div
            className="stat"
            id="pp"
            style={{ display: display || "none" }}
          >
            <p>{status}</p>
          </div>
          <img className="card-img-top" src={img} />
          <div className="card-body d-flex justify-content-between flex-column">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <button
                href="#"
                className="btn btn2 btn-primary w-100"
                id={id}
                onClick={() => {
                  addElementToData(
                    {
                    title: title,
                    price: price,
                    text: text,
                    img: img,
                    quality: 1,
                    id: id,
                  }
                  );
                }}
              >
                {price}
              </button>
              
            </div>
          </div>
        </div> 
        </div>
        </> 
    );
};



export default CardCarousel;