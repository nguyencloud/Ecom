import React from 'react';
import { Link } from 'react-router-dom';
import '../css/product.css';

function ProductCard({ product }) {
  return (
    <div className="item">
      <div className="sale">{product.sale}</div>
      <Link to={`/product/${product._id}`}>
        <img src={product.image} alt={product.name} className="DPi-image" />
      </Link>
      <div className="DPi-name">{product.name}</div>
      <div className="DPi-label">{product.label}</div>
      <div className="DPi-price">
        <div className="DPi-price-off">{product.priceOff}</div>
        <div className="DPi-price-on">{product.priceOn}</div>
      </div>
      <div className="DP-buynow">Mua ngay</div>
    </div>
  );
}

export default ProductCard;
