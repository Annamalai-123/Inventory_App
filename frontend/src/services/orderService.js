import axios from "axios";

const API_URL = "http://localhost:5000/api/order/";

const getOrder = async (token) => {
  const bearerToken = token.token;

  const options = {
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
  };
  console.log("get/order");
  const response = await axios.get(API_URL + "get-order", options);
  return response.data;
};

const addOrder = async (productData, token) => {
  const bearerToken = token.token;

  const options = {
    headers: {
      Authorization: `Bearer ${bearerToken}`,
      "Content-Type": "application/json",
    },
  };
  const response = await axios.post(
    API_URL + "add-order",
    JSON.stringify(productData),
    options
  );
  return response.data;
};

const orderService = {
  getOrder,
  addOrder,
};

export default orderService;
