import "../css/checkoutscreen.css";
import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";

function CheckoutScreen() {
  const [success, setSuccess] = useState(false);

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  const toNum = (str) => {
    return Number(str.split(" ")[0].replace(/\./g, ""));
  };

  let sum = 0;
  cart.forEach((item) => {
    sum += toNum(item.product.priceOn) * item.num;
  });
  const shippingFee = 30000;
  const total = sum + shippingFee;

  const handlePay = async (e) => {
    e.preventDefault();

    const fullName = document.querySelector('input[name="fullname"]').value;
    const email = document.querySelector('input[name="email"]').value;

    if (!fullName || !email) {
      toast.error("Please enter your full name and email.");
      return;
    }

    try {
      await axios.post("http://localhost:8000/user/create-order", {
        order_id: `DH${Math.floor(Math.random() * 1000000)}`,
        full_name: fullName,
        total: total,
        email: email,
        created_at: "",
      });

      toast.success("✅ Order placed successfully! Confirmation email sent.");
      setSuccess(true);
      localStorage.setItem("cart", JSON.stringify([]));
      window.dispatchEvent(new Event("storage"));
    } catch (error) {
      toast.error("❌ Failed to submit order!");
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="form">
        <form onSubmit={handlePay}>
          <h3>Shipping Information</h3>

          <label>Full Name <span className="star">*</span></label>
          <input type="text" name="fullname" style={{ width: "100%" }} placeholder="Nguyen va A" />

          <div className="flex-row">
            <div className="flex-col-2">
              <label>Email <span className="star">*</span></label>
              <input type="text" name="email" style={{ width: "100%" }} placeholder="abc@hsu.edu.vn" />
            </div>
            <div className="flex-col-2">
              <label>Phone Number</label>
              <input type="text" name="phone" style={{ width: "100%" }} placeholder="0948566534" />
            </div>
          </div>

          <label>Address <span className="star">*</span></label>
          <input type="text" name="address" style={{ width: "100%" }} placeholder="123 ABC, Ho Chi Minh City" />

          <div className="separation"></div>

          <p>Payment Method</p>
          <div className="radio-item">
            <label>
              <img
                alt=""
                src="https://cdn-icons-png.flaticon.com/512/5720/5720434.png"
              />
              Cash on Delivery (COD)
            </label>
            <input type="radio" id="COD" name="pay-method" value="COD" defaultChecked />
          </div>

          <div className="separation"></div>

          <div className="end-form">
            <p>Subtotal</p>
            <p>{formatter.format(sum)}</p>
          </div>

          <div className="end-form">
            <p>Shipping Fee</p>
            <p>{formatter.format(shippingFee)}</p>
          </div>

          <div className="end-form">
            <p>Total</p>
            <p>{formatter.format(total)}</p>
          </div>

          <div className="checkout-button">
            <Button variant="success" onClick={() => window.history.back()}>
              Back to Cart
            </Button>
            <Button variant="primary" type="submit">
              Checkout
            </Button>
          </div>

          {success && (
            <div style={{ color: "green", marginTop: 20, fontWeight: "bold", textAlign: "center" }}>
              Order completed successfully!
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default CheckoutScreen;
