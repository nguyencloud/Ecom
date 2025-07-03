import React from 'react';
import '../css/style.css'; // CSS riêng cho phần này
import labeldata from '../labeldata';

function Label() {
  return (
    <div className="product-list">
      {labeldata.thefifth.map((product, index) => (
        <div className="DP-item" key={index}>
          <a href={`/detail/${product._id}`}>
            <img src={product.image} alt={product.name} className="DPi-image" />
          </a>
          <div className="sale">{product.sale}</div>
          <div className="DPi-name">{product.name}</div>
          <div className="DPi-label">{product.label}</div>
          <div className="DPi-price">
            <div className="DPi-price-off">{product.priceOff}</div>
            <div className="DPi-price-on">{product.priceOn}</div>
          </div>
        </div>
      ))} {/* ✅ Đóng đúng dấu ngoặc tròn và ngoặc nhọn của map */}
    </div>
  );
}

export default Label;
