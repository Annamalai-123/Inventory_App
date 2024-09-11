import React, { forwardRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "../assets/styles/ProductCard.css";

const OrderCard = forwardRef((props, ref) => {
  const navigate = useNavigate();

  const { product } = props;

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return (
    <div className="product-card" ref={ref}>
      <img className="avatar" src={product.image.url} alt="product" />
      <div className="info">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>{product.name}</h3>
        </div>
        <p>
          {product.description.length > 100
            ? product.description.slice(0, 150) + "..."
            : product.description}
        </p>
      </div>
    </div>
  );
});
export default OrderCard;
