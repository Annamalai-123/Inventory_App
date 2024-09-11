# Inventory_management_app
# 📦 Inventory Management System

This Inventory Management System is designed to manage customer purchases, track purchase history, and ensure secure user authentication. It is built using modern technologies, including **React** for the frontend, **Node.js with Express** for the backend, **MongoDB** as the database, and additional tools like **NodeMailer** and **PDFKit** for extended functionalities.

## ✨ Features

### 1. 🔐 Authentication
- Secure user authentication is implemented using **JWT (JSON Web Tokens)** to ensure that only authorized users can access the system.
- This ensures that all user actions are securely validated, providing a safe environment for managing inventory and purchases.

### 2. 🗄️ Database Management
- **MongoDB** is used as the database to store all application data, leveraging its flexibility and scalability to handle large volumes of transactions and user data.
- The database interactions are managed through **Mongoose**, a popular ORM for MongoDB, ensuring smooth and efficient data handling.

### 3. 🧾 Purchase Receipt Generation and Email
- Upon a successful purchase, a PDF receipt is generated for the customer using **PDFKit**.
- The generated receipt is automatically sent to the customer’s registered email address using **NodeMailer**, ensuring timely delivery and proper documentation of purchases.

### 4. 🕒 Purchase History Tracking
- The system maintains a detailed record of all customer purchases.
- Customers can view their complete purchase history within their user profile or account, giving them easy access to their past transactions.

