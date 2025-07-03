import React, { useState } from 'react';
import '../css/detail.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import closeSearch from '../icon-font/close-icon.svg';
import labeldata from '../labeldata';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const data = labeldata.thefifth;

const CompareForm = styled.div`
  background-color: #fff;
  box-shadow: 1px 1px 1px 1px #ccc;
  border-radius: 20px;
  padding-bottom: 10px;
  height: 100%;
  width: 50%;
  padding: 16px;
  gap: 16px;
`;

const InputForm = styled.div`
  padding: 0px;
  gap: 9.7px;
  max-width: 100%;
  display: inline;
  flex-direction: column;
  align-items: flex-end;
  input {
    box-sizing: border-box;
    align-items: flex-start;
    width: 100%;
    height: 50px;
    border: 1px solid rgba(36, 89, 173, 1);
    border-radius: 10px;
    &:focus {
      outline: 2px solid rgba(36, 89, 173, 1);
    }
  }
`;

const LabelLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const LabelSearch = styled.label`
  font-weight: 700;
  font-size: 16px;
`;

const SearchResults = styled.div`
  width: 100%;
  height: 210px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow-y: auto;
`;

const ProductItem = styled(Link)`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  color: black;
  text-decoration: none;
  cursor: pointer;
  border-bottom: 1px solid #ccc;
  &:hover {
    background-color: lightgrey;
  }
  img {
    width: 60px;
    height: 60px;
    object-fit: contain;
    margin-right: 10px;
  }
`;

function Compare({ open, onClose, handle }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');
  const [hideInfo, setHideInfo] = useState(true);
  const [showCompare, setShowCompare] = useState(false);
  const [product, setProduct] = useState(null);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) =>
      value.name.toLowerCase().includes(searchWord.toLowerCase())
    );
    setFilteredData(searchWord === '' ? [] : newFilter);
  };

  const appear = (value) => {
    handle();
    setShowCompare(true);
    setProduct(value);
  };

  const turnBack = () => {
    onClose();
    setShowCompare(false);
  };

  const handleBuy = () => {
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    const found = cart.find((item) => item.product._id === product._id);
    if (!found) {
      cart.push({ product: product, num: 1 });
    } else {
      found.num++;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    toast('Added to cart successfully!');
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <>
      {open && (
        <CompareForm>
          <InputForm>
            <LabelLine>
              <LabelSearch>Enter product name</LabelSearch>
              <img onClick={onClose} src={closeSearch} className="close-outline-btn" alt="close" />
            </LabelLine>
            <input
              type="text"
              value={wordEntered}
              placeholder="..."
              onChange={handleFilter}
            />
            {filteredData.length > 0 && (
              <SearchResults>
                {filteredData.slice(0, 17).map((value, index) => (
                  <ProductItem key={value._id || index} onClick={() => appear(value)}>
                    <img src={value.image} alt="" />
                    <p>{value.name}</p>
                  </ProductItem>
                ))}
              </SearchResults>
            )}
          </InputForm>
        </CompareForm>
      )}

      {showCompare && product && (
        <div className="detail-container product3">
          <div className="center">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="under">
            <div className="price">
              <ion-icon className="price-tag-icon" name="pricetags-outline" />
              <div className="price-text">Price</div>
              <div className="price-self">{product.priceOn}</div>
            </div>
            <div className="more">
              <ion-icon name="heart-circle-outline" className="heart-btn" />
              <ion-icon name="share-social-outline" className="share-btn" />
            </div>
          </div>

          <form className="style-form">
            Color
            <input type="radio" name="form-detail" defaultValue="black" />
            <label>Black</label>
            <input type="radio" name="form-detail" defaultValue="gray" />
            <label>Gray</label>
          </form>

          <div className="name-product">{product.name}</div>

          <div className="btn-group">
            <button className="btn-shopping" onClick={handleBuy}>
              <ion-icon name="cart-outline" className="shopping-cart" />
              Buy Now
            </button>
            <button className="btn-close-outline">
              <ion-icon onClick={turnBack} name="close" className="close-outline-pop" />
            </button>
          </div>

          <div className="product-describe">
            Product Description
            <ul>
              <p>{product.title}</p>
              {product.describe.map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
          </div>

          <div className="more-detail">
            <div className="detail">Product Details</div>
            <div className="hide" onClick={() => setHideInfo(!hideInfo)}>
              {hideInfo ? 'Hide' : 'Show More'}
              {hideInfo ? (
                <ion-icon name="chevron-up-outline" />
              ) : (
                <ion-icon name="chevron-down-outline" />
              )}
            </div>
          </div>

          {hideInfo && (
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
                <div className="desc">
                  Manufacturer defects, wrong model/color, missing items. Supports exchange/return.
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Compare;
