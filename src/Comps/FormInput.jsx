import React from 'react';


const FormInput = (props) => {
    return (
        <>
            <div class="form-group mt-3">
    <label for={props.id} className="labelInput">{props.label}</label>
    <input type={props.type} className="form-control mt-3" id={props.id} placeholder={props.placeholder} />
  </div>
        </>
    );
};


export default FormInput;