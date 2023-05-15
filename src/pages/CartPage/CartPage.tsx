import { CustomSelect } from '../../shared/CustomSelect/CustomSelect';
import React from 'react';

export const CartPage = () => {
  const options = [
    { value: 1, label: 'Delivery company' },
    { value: 2, label: 'Post' },
  ];

  return (
    <>
      <div>CartPage</div>
      <div className="select-wrapper">
        <CustomSelect options={options} placeholder="Choose a delivery method" />
      </div>
    </>
  );
};
