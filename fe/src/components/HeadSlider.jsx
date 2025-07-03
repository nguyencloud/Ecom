import React from 'react';

function Headslider() {
  return (
    <div className="HeadSlider">
      <div className="HeadSlider-item">
        <img src={require('../img/HeadSlider/user.png')} alt="" className="HS-item-img" />
        <div className="HS-item-text">For You</div>
      </div>

      <div className="HeadSlider-item">
        <img src={require("../img/HeadSlider/1010.png")} alt="" className="HS-item-img" />
        <div className="HS-item-text">Super Sale 7.7</div>
      </div>

      <div className="HeadSlider-item">
        <img src={require("../img/HeadSlider/newproduct.png")} alt="" className="HS-item-img" />
        <div className="HS-item-text">New Arrivals</div>
      </div>

      <div className="HeadSlider-item">
        <img src={require("../img/HeadSlider/cheapest.png")} alt="" className="HS-item-img" />
        <div className="HS-item-text">Best Deals</div>
      </div>

      <div className="HeadSlider-item">
        <img src={require("../img/HeadSlider/dealhot.png")} alt="" className="HS-item-img" />
        <div className="HS-item-text">Hot Offers</div>
      </div>
    </div>
  );
}

export default Headslider;
