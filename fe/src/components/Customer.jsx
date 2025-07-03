import React from 'react';

function Customer() {
  return (
    <div id="customer">
      <div className="news-topic">
        <div className="news-topic-name">Style Inspiration</div>
        <div className="readmore">
          View More <ion-icon name="chevron-forward-outline" />
        </div>
      </div>
      <div className="news-container">
        <div className="news-item">
          <img src={require("../img/customer/cus1.png")} alt="" className="Nsi-img" />
          <div className="Nsi-name">Top 10+ Modern Fashion Styles for Urban Youth</div>
          <div className="Nsi-desc">With a dynamic lifestyle, personal fashion is becoming a stronger statement among young people...</div>
        </div>
        <div className="news-item">
          <img src={require("../img/customer/cus2.png")} alt="" className="Nsi-img" />
          <div className="Nsi-name">Comparing Fashion Brands – Which Style Fits You Best?</div>
          <div className="Nsi-desc">Korean, Western or Vintage – which aesthetic suits you best this year?</div>
        </div>
        <div className="news-item">
          <img src={require("../img/customer/cus3.png")} alt="" className="Nsi-img" />
          <div className="Nsi-name">Should You Follow Trends? What to Keep in Mind</div>
          <div className="Nsi-desc">Trends can refresh your look, but watch out for overdoing it...</div>
        </div>
        <div className="news-item">
          <img src={require("../img/customer/cus4.png")} alt="" className="Nsi-img" />
          <div className="Nsi-name">Fashion on a Budget – Look Great Without Overspending</div>
          <div className="Nsi-desc">You don’t need an expensive wardrobe — just smart outfit coordination makes all the difference...</div>
        </div>
        <div className="news-item">
          <img src={require("../img/customer/cus5.png")} alt="" className="Nsi-img" />
          <div className="Nsi-name">Tips for Office Wear That’s Both Formal & Stylish</div>
          <div className="Nsi-desc">Office fashion doesn’t have to be boring – play with colors and cuts to stay sharp yet youthful...</div>
        </div>
        <div className="news-item">
          <img src={require("../img/customer/cus6.png")} alt="" className="Nsi-img" />
          <div className="Nsi-name">The Capsule Wardrobe – Minimalism with Style</div>
          <div className="Nsi-desc">Minimal doesn’t mean boring. A capsule wardrobe saves time and keeps you stylish every morning...</div>
        </div>
        <div className="news-item">
          <img src={require("../img/customer/cus7.png")} alt="" className="Nsi-img" />
          <div className="Nsi-name">Accessorizing – Quick Style Boosts</div>
          <div className="Nsi-desc">A few simple accessories can instantly elevate your basic outfit...</div>
        </div>
        <div className="news-item">
          <img src={require("../img/customer/cus8.png")} alt="" className="Nsi-img" />
          <div className="Nsi-name">Sustainable Fashion – Eco-Friendly Style Trends</div>
          <div className="Nsi-desc">Recycled materials and durable designs are rising trends embraced by young fashion lovers...</div>
        </div>
      </div>
    </div>
  );
}

export default Customer;
