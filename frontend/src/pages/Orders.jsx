import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { forwardRef, useEffect } from "react";
import OrderCard from "../components/OrderCard";
import ProductSkeleton from "../components/ProductSkeleton";
import { getOrder, reset } from "../features/auth/orderSlice";
import { getProduct } from "../features/auth/productSlice";

const Orders = forwardRef((props, ref) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { orderData, loading, error, hasMore } = useSelector(
    (state) => state.order
  );

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    console.log("user", user);
    dispatch(getOrder());
  }, [user]);

  return (
    <>
      <NavBar />
      <div className="product-page">
        <h1 style={{ marginBottom: "1.5rem" }}>Orders</h1>
        <div className="product-container">
          <div className="product-list" style={{ width: "100%" }}>
            {loading && <ProductSkeleton cards={8} />}
            {orderData &&
              orderData.flat().map((product, index) => {
                return <OrderCard product={product} key={index} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
});

export default Orders;
