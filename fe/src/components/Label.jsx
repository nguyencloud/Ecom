import React from 'react';
import '../css/style.css'; // CSS riêng cho phần này
import labeldata from '../labeldata';

function Label() {
  return (
    <div className="label-wrapper">
      <div className="label-section">
        <div className="label-left">
          <img
            src={require('../img/thefifth_logo.jpg')}
            alt="THE FIFTH LABEL"
            className="label-logo"
          />
        </div>
        <div className="label-right">
          <h2>The Fifth Label</h2>
          <p>
            The Fifth Label là thương hiệu thời trang trẻ trung dành cho giới trẻ yêu thích sự năng động và cá tính.
            Với thiết kế hiện đại, chất liệu cao cấp và giá thành hợp lý, The Fifth luôn là lựa chọn hàng đầu trong tủ đồ hằng ngày.
          </p>
          <p>
            Các sản phẩm nổi bật như áo croptop, chân váy, đầm maxi… đều mang phong cách độc đáo, giúp bạn tự tin thể hiện cá tính của mình trong mọi hoàn cảnh.
          </p>
          <a href="/product" className="btn-see-more">Xem thêm sản phẩm</a>
        </div>
      </div>

      <div className="product-list">
        {
          labeldata.thefifth.map((product, index) => (
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
          ))
        }
      </div>
    </div>
  );
}

export default Label;
