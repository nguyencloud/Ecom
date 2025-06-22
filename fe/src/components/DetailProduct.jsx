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

  const { id } = useParams(); // id là chuỗi
  const allProducts = labeldata.thefifth || [];
  const product = allProducts.find(item => item._id === id); // So sánh chuỗi với chuỗi

  const handleBuy = () => {
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    if (!cart.find(item => item.product.name === product.name)) {
      cart = [...cart, { product, num: 1 }];
    } else {
      cart.find(item => item.product.name === product.name).num++;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    toast('Bạn đã thêm vào giỏ hàng thành công!');
    window.dispatchEvent(new Event('storage'));
  };

  if (!product) {
    return (
      <div className="detail-container">
        <ToastContainer />
        <p style={{ color: 'red', textAlign: 'center', marginTop: '100px', fontSize: '18px' }}>
          ❌ Không tìm thấy sản phẩm với ID: {id}
        </p>
      </div>
    );
  }

  return (
    <>
      <ToastContainer />
      <div className="detail-container">
        {/* Dòng đầu: Ảnh trái - Thông tin phải */}
        <div className="detail-top">
          {/* Ảnh */}
          <div className="product-left">
            <img src={product.image} alt="product" />
          </div>

          {/* Thông tin */}
          <div className="product-right">
            <div className="price">
              <ion-icon className="price-tag-icon" name="pricetags-outline" />
              <div className="price-text">Giá bán</div>
              <div className="price-self">{product.priceOn}</div>
            </div>

            <form className="style-form">
              <b>Màu sắc</b><br />
              <input type="radio" name="form-detail" defaultValue="den" />
              <label>Đen</label><br />
              <input type="radio" name="form-detail" defaultValue="xam" />
              <label>Xám</label>
            </form>

            <div className="name-product"><b>{product.name}</b></div>

            <div className="btn-group">
              <button className="btn-shopping" onClick={handleBuy}>
                <ion-icon name="cart-outline" className="shopping-cart"></ion-icon>Mua ngay
              </button>
              {!style ? (
                <button onClick={changeStyle} className="btn-compare">
                  <ion-icon name="search-outline" className="compare-outline"></ion-icon>So sánh
                </button>
              ) : (
                <button className="btn-close-outline">
                  <ion-icon onClick={closeCompare} name="close" className="close-outline-pop"></ion-icon>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Dưới: Thông tin mô tả */}
        <div className="product-describe">
          <h4>Thông tin mô tả</h4>
          <p>{product.title}</p>
          <ul>
            {product.describe.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        </div>

        {/* Xem thêm chi tiết */}
        <div className="more-detail">
          <div className="detail">Thông tin chi tiết</div>
          <div className="hide" onClick={() => setShow(!show)}>
            {show ? 'Ẩn bớt' : 'Xem thêm'}
            {show ? <ion-icon name="chevron-up-outline" /> : <ion-icon name="chevron-down-outline" />}
          </div>
        </div>

        {show && (
          <div className="detail-product">
            <div className="detail-product-item">
              <div className="field">Hạn đổi trả:</div>
              <div className="desc">15 ngày</div>
            </div>
            <div className="detail-product-item">
              <div className="field">Kích thước:</div>
              <div className="desc">
                Size S: 1m40 - 1m55 (dài: 72cm; rộng: 54cm; tay: 20cm)<br />
                Size M: 1m55 - 1m65 (dài: 74cm; rộng: 56cm; tay: 21cm)<br />
                Size L: 1m65 - 1m75 (dài: 76cm; rộng: 58cm; tay: 22cm)<br />
                Size XL: 1m75 - 1m90 (dài: 78cm; rộng: 60cm; tay: 23cm)
              </div>
            </div>
            <div className="detail-product-item">
              <div className="field">Xuất xứ:</div>
              <div className="desc">Việt Nam</div>
            </div>
            <div className="detail-product-item">
              <div className="field">Thông tin thêm:</div>
              <div className="desc">Lộn mặt trái khi giặt và ủi. Khuyến khích giặt hấp.</div>
            </div>
            <div className="detail-product-item">
              <div className="field">LƯU Ý:</div>
              <div className="desc">KHÔNG SỬ DỤNG MÁY SẤY.</div>
            </div>
            <div className="detail-product-item">
              <div className="field">Thời hạn bảo hành:</div>
              <div className="desc">1 tháng</div>
            </div>
            <div className="detail-product-item">
              <div className="field">Chính sách bảo hành:</div>
              <div className="desc">
                Lỗi do NSX, giao sai mẫu/màu, giao thiếu. Hỗ trợ đổi trả.
              </div>
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
