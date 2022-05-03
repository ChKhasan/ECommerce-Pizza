import React from 'react';

const Cashin = (props) => {
    return (
        <>
            <div className='col-3 mt-5 cashin-box d-flex justify-content-center  col-lg-3 rel '>
                <img className='cashbek'  src={props.name} alt="" />
                <p className='abs'>{props.price}</p>
            </div>
        </>
    );
};


export default Cashin;