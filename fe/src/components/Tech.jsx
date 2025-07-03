import React from 'react';

function Tech() {
  return (
    <>
      <div className="news-topic">
        <div className="news-topic-name">Fashion News</div>
        <div className="readmore">
          See more <ion-icon name="chevron-forward-outline" />
        </div>
      </div>

      <div className="news-container">
        <a
          href="https://vietnamnews.vn/life-style/1032168/finding-new-life-for-old-jeans.html"
          target="_blank"
          rel="noopener noreferrer"
          className="news-item"
        >
          <img src={require("../img/technology/1.jpeg")} alt="" className="Nsi-img" />
          <div className="Nsi-name">
            Finding new life for old jeans
          </div>
          <div className="Nsi-desc">
            Hanoi, June 2025 – After nearly two years establishing its presence in Ho Chi Minh City, Vietnamese streetwear brand FIFTH LABEL has officially expanded its footprint with the opening of its second store in Hanoi...
          </div>
        </a>

        <a
          href="https://upmag.com/good-luck-dry-cleaners/"
          target="_blank"
          rel="noopener noreferrer"
          className="news-item"
        >
          <img src={require("../img/technology/2.jpeg")} alt="" className="Nsi-img" />
          <div className="Nsi-name">
            FIFTH LABEL x NOMAD STUDIO: The History Making Parties of Good Luck Dry Cleaners
          </div>
          <div className="Nsi-desc">
            Ho Chi Minh City, June 2025 – Amidst the rising wave of local fashion creativity, FIFTH LABEL has emerged as a pioneering brand that defines the lifestyle of Gen Z in Vietnam...
          </div>
        </a>

        <a
          href="https://www.scribd.com/document/731567223/The-Rise-of-Sustainable-Fashion-A-Paradigm-Shift-in-the-Clothing-Industry"
          target="_blank"
          rel="noopener noreferrer"
          className="news-item"
        >
          <img src={require("../img/technology/3.jpeg")} alt="" className="Nsi-img" />
          <div className="Nsi-name">The Rise of Sustainable Fashion - A Paradigm Shift in The Clothing Industry</div>
          <div className="Nsi-desc">
            Located in Tay Ho—Hanoi’s emerging creative district—the new 120m² store features a minimalist urban aesthetic...
          </div>
        </a>
      </div>
    </>
  );
}

export default Tech;
