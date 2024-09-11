const nodeMailer = require("nodemailer");
const PDFDocument = require("pdfkit");
const path = require("path");
const fs = require("fs");

const Order = require("../../models/order");
const Product = require("../../models/product");
const asynchandler = require("express-async-handler");

const addOrder = asynchandler(async (req, res) => {
  const { productId } = req.body;

  if (!productId) {
    res.status(400);
    throw new Error("Product Id or User Id not found");
  }

  const order = Order.create({
    product: productId,
    customer: req.user._id,
  });

  if (order) {
    const pdfPath = path.join(__dirname, "order_receipt.pdf");
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(pdfPath));

    doc.fontSize(25).text("Order Receipt", { align: "center" });
    doc.text(`Product ID: ${productId}`, { align: "left" });
    doc.text(`Customer ID: ${req.user._id}`, { align: "left" });
    doc.text(`Username: ${req.user.username}`, { align: "left" });

    doc.end();

    const transporter = nodeMailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_ID,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.MAIL_ID,
      to: req.user.email,
      subject: "Your Order Receipt",
      text: "Please find attached your order receipt.",
      attachments: [
        {
          filename: "order_receipt.pdf",
          path: pdfPath,
          contentType: "application/pdf",
        },
      ],
    });

    fs.unlinkSync(pdfPath);
    res.status(201).json({
      message: "Order created successfully",
    });
  } else {
    res.status(400);
    throw new Error("Invalid order data");
  }
});

module.exports = addOrder;
