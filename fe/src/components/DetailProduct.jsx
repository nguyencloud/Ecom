import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import labeldata from '../labeldata';
import '../css/detail.css';
import Compare from '../components/Compare';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DetailProduct() {
  const [style, setStyle] = useState(false);
  const [compare, setCompare] = useState(false);
  const [show, setShow] = useState(true);

  const closeCompare = () => {
    setCompare(false);
    setStyle(false);
  };

  const changeStyle = () => {
    setStyle(current => !current);
    setCompare(current => !current);
  };

  const { id } = useParams();
  const allProducts = labeldata.thefifth || [];
  const product = allProducts.find(p => p._id === id);

  if (!product) {
    console.error("Không tìm thấy sản phẩm");
    return null;
  }

  const handleBuy = () => {
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

    const existingItem = cart.find(item => item.product._id === product._id);
    if (existingItem) {
      existingItem.num += 1;
    } else {
      cart.push({ product: { ...product }, num: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    toast('Added to cart successfully!');
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <>
      <ToastContainer />
      <div className="detail-container">
        <div className="detail-top">
          <div className="product-left">
            <img src={product.image} alt="product" />
          </div>

          <div className="product-right">
            <div className="price">
              <ion-icon className="price-tag-icon" name="pricetags-outline" />
              <div className="price-text">Price</div>
              <div className="price-self">{product.priceOn}</div>
            </div>

            <form className="style-form">
              <b>Color</b><br />
              <input type="radio" name="form-detail" defaultValue="black" />
              <label>Black</label><br />
              <input type="radio" name="form-detail" defaultValue="gray" />
              <label>Gray</label>
            </form>

            <div className="name-product"><b>{product.name}</b></div>

            <div className="btn-group">
              <button className="btn-shopping" onClick={handleBuy}>
                <ion-icon name="cart-outline" className="shopping-cart"></ion-icon>Buy Now
              </button>
              {!style ? (
                <button onClick={changeStyle} className="btn-compare">
                  <ion-icon name="search-outline" className="compare-outline"></ion-icon>Compare
                </button>
              ) : (
                <button className="btn-close-outline">
                  <ion-icon onClick={closeCompare} name="close" className="close-outline-pop"></ion-icon>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="product-describe">
          <h4>Description</h4>
          <p>{product.title}</p>
          <ul>
            {product.describe.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        </div>

        <div className="more-detail">
          <div className="detail">Product Details</div>
          <div className="hide" onClick={() => setShow(!show)}>
            {show ? 'Hide' : 'Show More'}
            {show ? <ion-icon name="chevron-up-outline" /> : <ion-icon name="chevron-down-outline" />}
          </div>
        </div>

        {show && (
          <div className="detail-product">
            <div className="detail-product-item">
              <div className="field">Return Policy:</div>
              <div className="desc">15 days</div>
            </div>
            <div className="detail-product-item">
              <div className="field">Size Guide:</div>
              <div className="desc">
                Size S: 1.40m - 1.55m (length: 72cm; width: 54cm; sleeve: 20cm)<br />
                Size M: 1.55m - 1.65m (length: 74cm; width: 56cm; sleeve: 21cm)<br />
                Size L: 1.65m - 1.75m (length: 76cm; width: 58cm; sleeve: 22cm)<br />
                Size XL: 1.75m - 1.90m (length: 78cm; width: 60cm; sleeve: 23cm)
              </div>
            </div>
            <div className="detail-product-item">
              <div className="field">Origin:</div>
              <div className="desc">Vietnam</div>
            </div>
            <div className="detail-product-item">
              <div className="field">Additional Info:</div>
              <div className="desc">Turn inside out when washing and ironing. Dry-cleaning recommended.</div>
            </div>
            <div className="detail-product-item">
              <div className="field">NOTE:</div>
              <div className="desc">DO NOT USE DRYER.</div>
            </div>
            <div className="detail-product-item">
              <div className="field">Warranty Period:</div>
              <div className="desc">1 month</div>
            </div>
            <div className="detail-product-item">
              <div className="field">Warranty Policy:</div>
              <div className="desc">Manufacturer defects, wrong model/color, missing items. Supports exchange/return.</div>
            </div>
          </div>
        )}
      </div>

      <Compare
        open={compare}
        onClose={closeCompare}
        handle={() => {
          setCompare(false);
          setStyle(true);
        }}
      />
    </>
  );
}

export default DetailProduct;
