const Order = require("../../models/order");
const asynchandler = require("express-async-handler");

const getOrder = asynchandler(async (req, res) => {
  try {
    console.log("getOrders");
    // Find all orders for the specified customer and populate the product field
    const orders = await Order.find({ customer: req.user._id })
      .populate("product", "name code category image description") // Populate only relevant fields from the Product schema
      .exec();

    // Extract only the product field from each order
    const products = orders.map((order) => order.product);

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching products for the customer");
  }
});

module.exports = getOrder;
