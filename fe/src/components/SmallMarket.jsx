import React from 'react';
import labeldata from '../labeldata.js'; // Đảm bảo bạn import đúng file chứa "labeldata"

function SmallMarket() {
  return (
    <div className="SmallMarket">
      <div className="chapter">
        <div className="chapter-line" />
        <div className="chapter-name">Sản phẩm thời trang nổi bật</div>
      </div>

      <div className="SM-container">
        <div className="SM-row">
          {
            labeldata.thefifth.slice(0, 4).map((item, index) => (
              <div className="DP-item" key={index}>
                <a href={`/detail/${item._id}`}>
                  <img src={item.image} alt={item.name} className="DPi-image" />
                </a>
                <div className="sale">{item.sale}</div>
                <div className="DPi-name">{item.name}</div>
                <div className="DPi-label">{item.label}</div>
                <div className="DPi-price">
                  <div className="DPi-price-off">{item.priceOff}</div>
                  <div className="DPi-price-on">{item.priceOn}</div>
                </div>
              </div>
            ))
          }
        </div>

        <div className="SM-row">
          {
            labeldata.thefifth.slice(4, 8).map((item, index) => (
              <div className="DP-item" key={index}>
                <a href={`/detail/${item._id}`}>
                  <img src={item.image} alt={item.name} className="DPi-image" />
                </a>
                <div className="sale">{item.sale}</div>
                <div className="DPi-name">{item.name}</div>
                <div className="DPi-label">{item.label}</div>
                <div className="DPi-price">
                  <div className="DPi-price-off">{item.priceOff}</div>
                  <div className="DPi-price-on">{item.priceOn}</div>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div className="DP-buynow btn-shake">
        <a href="/product" className="none-a">Xem thêm</a>
      </div>
    </div>
  );
}

export default SmallMarket;
