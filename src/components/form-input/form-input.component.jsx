import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ changeCallback, label, ...otherProps }) => {
  return (
    <div className="group">
      <input 
        className="form-input" 
        onChange={changeCallback}
        {...otherProps}
      />
      {
        label &&
          <label className={`${
            otherProps.value.length 
              ? "shrink" 
              : ""
            } form-input-label`}
          >
           {label}
          </label>
      }
    </div>
  );
}

export default FormInput;