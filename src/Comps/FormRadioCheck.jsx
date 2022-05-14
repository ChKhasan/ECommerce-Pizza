import React, { useState } from "react";
import Radio from "@mui/material/Radio";

const FormRadioCheck = ({group,toLabel,title}) => {
  const [selectedValue, setSelectedValue] = useState("a");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });
  
  return (
    <>
      <div className="form-check mt-3">
        <Radio
          {...controlProps(group)}
          sx={{
            color: "#ff7010",
            "&.Mui-checked": {
              color: "#ff7010",
            },
          }}
        />
        <label className="form-check-label mr-2" for={toLabel}>
          {title}
        </label>
      </div>
    </>
  );
};


export default FormRadioCheck;
