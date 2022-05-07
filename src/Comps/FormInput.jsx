import React from "react";

const FormInput = ({ label, id, placeholder, type }) => {
  return (
    <>
      <div className="form-group mt-3">
        <label for={id} className="labelInput">
          {label}
        </label>
        <input
          type={type}
          className="form-control mt-3"
          id={id}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default FormInput;
