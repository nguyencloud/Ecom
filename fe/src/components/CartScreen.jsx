import "../css/cartscreen.css";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CartScreen = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  // Load cart từ localStorage khi component mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        const parsed = JSON.parse(storedCart);
        const validated = parsed.map((item) => ({
          product: {
            image: item.product?.image || "",
            label: item.product?.label || "",
            name: item.product?.name || "Sản phẩm không tên",
            priceOn: item.product?.priceOn || "0 đ",
          },
          num: item.num || 1,
        }));
        setCart(validated);
      } catch (e) {
        console.error("Lỗi khi parse cart:", e);
        setCart([]);
      }
    }
  }, []);

  const handleRemove = (item) => {
    const updatedCart =
      item.num === 1
        ? cart.filter((x) => x.product.name !== item.product.name)
        : cart.map((x) =>
            x.product.name === item.product.name ? { ...x, num: x.num - 1 } : x
          );

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("storage"));
  };

  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  const toNum = (str) => {
    return Number(str.split(" ")[0].replace(/\./g, "").replace(/[^\d]/g, ""));
  };

  const total = cart.reduce((acc, x) => {
    return acc + toNum(x.product.priceOn) * x.num;
  }, 0);

  return (
    <div className="cart">
      <div className="table-container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Hình ảnh</th>
              <th>Sản phẩm</th>
              <th>Đơn Giá</th>
              <th>Số lượng</th>
              <th>Tùy chỉnh</th>
            </tr>
          </thead>
          <tbody>
            {cart.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>
                  Giỏ hàng trống.
                </td>
              </tr>
            ) : (
              cart.map((item, index) => (
                <tr key={index} className={index % 2 ? "RowEven" : "RowOdd"}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      className="cart-img"
                      src={item.product.image}
                      alt={item.product.label || "product"}
                    />
                  </td>
                  <td>{item.product.name}</td>
                  <td>{item.product.priceOn}</td>
                  <td>{item.num}</td>
                  <td>
                    <button
                      className="cart-row-remove"
                      onClick={() => handleRemove(item)}
                    >
                      <img
                        src={require("../img/delete.png")}
                        alt="delete"
                      />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <h5>Tổng tiền: {formatter.format(total)}</h5>
      </div>

      <div className="checkout">
        <Button variant="primary" onClick={() => navigate("/checkout")}>
          Thanh toán
        </Button>
      </div>
    </div>
  );
};

export default CartScreen;
