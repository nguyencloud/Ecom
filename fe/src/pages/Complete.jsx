import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/policy.css";
import { Button } from "react-bootstrap";
import axios from "axios";

const Complete = () => {
  const handleClick = async () => {
    const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

    const toNum = (str) => {
      return Number(str.split(' ')[0].replace(/\./g, ''));
    };

    let sum = 0;
    cart.forEach((x) => {
      sum += toNum(x.product.priceOn) * x.num;
    });

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'VND',
    });

    await axios.post("http://localhost:8000/user/message-send", {
      phoneTo: "+84389895377",
      bodyMessage: `Your order for a Robot worth ${formatter.format(sum)} has been placed successfully. THE FIFTH LABEL thanks you and looks forward to serving you again!`,
    });

    localStorage.setItem("cart", JSON.stringify([]));
    window.dispatchEvent(new Event("storage"));
    window.location.replace("http://localhost:3000");
  };

  return (
    <>
      <Header />
      <div className="Policy-background">
        <div className="Policy-container" style={{ textAlign: "center" }}>
          <img src={require('./../img/success.jpg')} alt='' />
          <h1 style={{ textAlign: "center", color: "#009B77", textShadow: "1px 1px" }}>
            Congratulations! Your purchase was successful. A confirmation message will be sent to your phone shortly. Please return to the homepage!
          </h1>
          <Button variant="success" style={{ margin: "20px" }} onClick={handleClick}>
            Confirm
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Complete;
