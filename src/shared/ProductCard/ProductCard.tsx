import './ProductCard.scss';
import { Link } from 'react-router-dom';
import React, { ReactNode } from 'react';

interface ProductCardProps {
  id: number;
  title: string;
  imageColor: string;
  colors: string[];
  price: number;
  children?: Array<ReactNode>;
}

export const ProductCard = (props: ProductCardProps) => {
  const { id, colors, imageColor, price, title } = props;
  return (
    <div className="product-card">
      <div className="product-image" style={{ backgroundColor: imageColor }}></div>
      <div className="product-title">
        <Link to={`/product/${id}`}>{title}</Link>
      </div>
      <div className="available-colors">
        {colors.map((color) => (
          <div key={`color-${color}`} className="product-color" style={{ backgroundColor: color }}></div>
        ))}
      </div>
      <div className="product-price">{price} руб.</div>
    </div>
  );
};
