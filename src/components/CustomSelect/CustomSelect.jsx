import React from 'react';

const CustomSelect = ({ title, id, handleChange, children }) => {
  return (
    <div>
      <p>{title}</p>
      <select name={id} id={id} onChange={handleChange}>
        {children}
      </select>
    </div>
  );
};

export default CustomSelect;
