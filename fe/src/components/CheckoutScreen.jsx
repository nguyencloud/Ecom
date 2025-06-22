import "../css/checkoutscreen.css";
import axios from "axios";
// import { useState } from "react";
import {Button} from 'react-bootstrap';
import {Navigate} from "react-router-dom";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
function CheckoutScreen() {

  const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
  const [success, setSuccess] = useState(false);

  const toNum=(str)=>{
    return Number(str.split(' ')[0].replace(/\./g,''))
   }
 
   const formatter = new Intl.NumberFormat('en-US', {
     style: 'currency',
     currency: 'VND',
 
   });
   let sum=0;
 
 cart.forEach(x=>{
 sum+=toNum(x.product.priceOn)*x.num
 })
 
//  const handlePay = async () => {
//    try {
//      await axios.post("http://localhost:8000/user/message-send", {
//        phoneTo: "+84389895377",
//        bodyMessage:
//          `Quý khách đã đặt hàng thành công đơn hàng Robot trị giá ${formatter.format(sum*1000)}. THE FIFTH LABLE cảm ơn và hẹn gặp lại!`,
//      });
//      const payment = await axios.post("http://localhost:8000/user/payment", {
//        amount: (sum+30000)/1000,
//        orderId: `DONHANG${Math.floor(Math.random() * 100000)}`,
//        orderInfo: "DON HANG BKROBOTIC",
//      });
 
//      if (payment.data.code === 200) {
//        console.log(payment.data.data);
//        window.location.replace(payment.data.data);
//      }
//    } catch (error) {
//      console.log("Xay ra loi");
//      console.log(error);
//    }
//  };

  // const handleSubmit = async (e) => {
  //   e.prevendefault();
  //   await handlePay();
    
  // };
  
  
  const handlePay = async (e) => {
  e.preventDefault();
  const fullname = document.querySelector('input[name="fullname"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const phone = document.querySelector('input[name="phone"]').value;
  const address = document.querySelector('input[name="address"]').value;
  const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

  try {
    await axios.post("http://localhost:8000/user/create-order", {
      fullname,
      email,
      phone,
      address,
      cart,
      paymentMethod: "COD"
    });
    toast("Mua hàng thành công!");
    setSuccess(true);
    localStorage.setItem("cart", JSON.stringify([]));
    window.dispatchEvent(new Event("storage"));
  } catch (error) {
    toast("Có lỗi xảy ra khi đặt hàng!");
    console.log(error);
  }
};
  return (
    <div className="container">
      <div className="form">
        <form>
          <h3>Thông tin giao hàng</h3>

          <label id="fullname">
            {" "}
            Họ và tên <span className="star">*</span>
          </label>
          <input
            type="text"
            name="fullname"
            style={{width:"100%"}}
            placeholder="Nguyễn Văn A"
          />

<div className="flex-row">
              <div className="flex-col-2">
                <label>
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  style={{width:"100%"}}

                  placeholder="abc@hcmut.edu.vn"
                />
              </div>
              <div className="flex-col-2">
                <label>Số điện thoại <span> *</span></label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  style={{width:"100%"}}

                  placeholder="0948566534"
                />
              </div>
            </div>

          <label id="adr">
            {" "}
            Địa chỉ <span className="star">*</span>
          </label>
          <input
            type="text"
            style={{width:"100%"}}
            name="address"
            placeholder="Đại học Bách Khoa"
          />

          <div className="separation"></div>

          <p>Phương thức thanh toán</p>
          <div className="radio-item">
            <label id="COD">
              <img
                alt=""
                src="https://cdn-icons-png.flaticon.com/512/5720/5720434.png"
              />
              Thanh toán khi nhận hàng
            </label>
            <input type="radio" id="COD" name="pay-method" value="COD" />
          </div>

         
          <div className="separation"></div>

          <div className="end-form">
            <p>Giá trị đơn hàng</p>
            <p>{formatter.format(sum)}</p>
          </div>

          <div className="end-form">
            <p>Phí vận chuyển</p>
            <p>{formatter.format("30000")}</p>
          </div>

          <div className="end-form">
            <p>Tổng cộng</p>
            <p>{formatter.format(sum+30000)}</p>
          </div>

          <div className="separation">
            
          </div>
           
            {/* <Button variant="danger" onClick={()=><Navigate to='/cart' />}> Giỏ hàng</Button> */}
        </form>
        <div className="checkout-button">
        <Button variant="success"  onClick={()=><Navigate to='/cart' />}> Về giỏ hàng</Button>
        <Button variant="primary" onClick={handlePay} >Thanh toán</Button>
        </div>
          {success && (
          <div style={{ color: "green", marginTop: 20, fontWeight: "bold", textAlign: "center" }}>
            Mua hàng thành công!
          </div>
        )}
              
      </div>
    </div>
  );
}

export default CheckoutScreen;
