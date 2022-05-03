import React from 'react';
import Radio from '@mui/material/Radio';

const FormRadioCheck = (props) => {
  const [selectedValue, setSelectedValue] = React.useState('a');
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });
    return (
        <>
            <div class="form-check mt-3">
 
  <Radio
        {...controlProps(props.group)}
        sx={{
          color: '#ff7010',
          '&.Mui-checked': {
            color: '#ff7010',
          },
        }}
      />
  <label class="form-check-label mr-2" for={props.for}>
    {props.title}
  </label>
</div>
        </>
    );
};

FormRadioCheck.propTypes = {};

export default FormRadioCheck;