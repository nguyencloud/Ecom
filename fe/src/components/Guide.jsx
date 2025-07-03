import React from 'react';

function Guide() {
  return (
    <div id="guide">
      <div className="news-topic">
        <div className="news-topic-name">Guides & FAQs</div>
        <div className="readmore">
          See more <ion-icon name="chevron-forward-outline" />
        </div>
      </div>

      <div className="news-container">
        <div className="news-item">
          <img src={require("../img/guide/guide1.png")} alt="" className="Nsi-img" />
          <div className="Nsi-name">
            Top 10+ Fashion Tips for Urban Young Adults
          </div>
          <div className="Nsi-desc">
            In the fast-paced life of modern youth, defining personal style is more important than ever. Let’s explore how to look stylish effortlessly...
          </div>
        </div>

        <div className="news-item">
          <img src={require("../img/guide/guide2.png")} alt="" className="Nsi-img" />
          <div className="Nsi-name">
            Compare Korean and Western Fashion – What Suits You Best?
          </div>
          <div className="Nsi-desc">
            Wondering whether Korean minimalism or Western boldness is your style? Here's a detailed comparison to help you choose...
          </div>
        </div>

        <div className="news-item">
          <img src={require("../img/guide/guide3.png")} alt="" className="Nsi-img" />
          <div className="Nsi-name">
            Should You Follow Trends? Dos and Don’ts of Keeping Up with Fashion
          </div>
          <div className="Nsi-desc">
            Following trends is a great way to refresh your look — but beware of common pitfalls that can make your outfit go wrong...
          </div>
        </div>

        <div className="news-item">
          <img src={require("../img/guide/guide4.png")} alt="" className="Nsi-img" />
          <div className="Nsi-name">
            Budget-Friendly Wardrobe: How to Dress Well Without Overspending
          </div>
          <div className="Nsi-desc">
            Even with a limited budget, you can build a smart wardrobe. Learn how to mix and match pieces for maximum style and value...
          </div>
        </div>

        <div className="news-item">
          <img src={require("../img/guide/guide5.png")} alt="" className="Nsi-img" />
          <div className="Nsi-name">
            Top 10+ Fashion Hacks Every Woman Should Know
          </div>
          <div className="Nsi-desc">
            From how to make your outfit look more expensive to choosing the right accessories — these hacks will elevate your fashion game...
          </div>
        </div>

        <div className="news-item">
          <img src={require("../img/guide/guide6.png")} alt="" className="Nsi-img" />
          <div className="Nsi-name">
            Sustainable Fashion – Dress Stylishly, Live Responsibly
          </div>
          <div className="Nsi-desc">
            Discover how to shop smarter and dress better while protecting the environment. Sustainable is the new chic...
          </div>
        </div>

        <div className="news-item">
          <img src={require("../img/guide/guide7.png")} alt="" className="Nsi-img" />
          <div className="Nsi-name">
            Outfit Ideas for Every Occasion: Work, Date, and Weekend
          </div>
          <div className="Nsi-desc">
            Need help dressing for different events? This guide offers versatile outfit suggestions that will have you ready in no time...
          </div>
        </div>

        <div className="news-item">
          <img src={require("../img/guide/guide8.png")} alt="" className="Nsi-img" />
          <div className="Nsi-name">
            Closet Essentials: Must-Have Items for a Timeless Look
          </div>
          <div className="Nsi-desc">
            A good wardrobe starts with the basics. Check out the key pieces every fashion lover should own for long-lasting style...
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guide;
