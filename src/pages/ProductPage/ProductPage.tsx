import './ProductPage.scss';
import { CustomSelect } from '../../shared/CustomSelect/CustomSelect';
import React from 'react';
import helmet from './assets/helmet.png';

export const ProductPage = () => {
  const options = [
    { value: 1, label: 'S' },
    { value: 2, label: 'M' },
    { value: 3, label: 'L' },
  ];

  return (
    <div className="container product-page">
      <h1>Awesome helmet</h1>
      <img src={helmet} alt="" />
      <div>Color: black</div>
      <div>Please select the size:</div>
      <div className="select-wrapper">
        <CustomSelect options={options} placeholder="Choose a size" />
      </div>
    </div>
  );
};
