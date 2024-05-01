# Ecommerce Project_Final_Assignment

# Developers:

Federico Massimino and Bruno Rodrigues Silva

# Description:

The project is still in progress and is part of an exercise assigned to us as the conclusion of a backend programming development course. Therefore, the frontend development part is not yet available, and we are not certain whether it will be implemented.

The purpose of the assignment was to make use of all the knowledge we have accumulated over the past few months. The task was to create an E-COMMERCE connected to an external database and managed by a server capable of making RESTful API calls (POST, GET, PUT, DELETE), allowing for operations like viewing, creating, modifying, and deleting items within the database.

We utilized MongoDB as our database, which is a NoSQL database.

At its current development stage, although not fully implemented, it could be considered as a rudimentary ecommerce that can serve as a foundation for almost any type of implementation. We hope it can be useful even for anyone else approaching the programming world as a starting point to learn.

[Link to GitHub Repository](https://github.com/GimbeiNa89/Ecommerce_ITA_BRA.git)

# Running the Project:

To run the project, you need to install node.js
(Install node.js as described here: [Node.js Download](https://nodejs.org/en/#download)).

# Starting Node:

1. Make sure you are in the project directory containing the package.json file.

2. Open the terminal or command prompt.

3. Run the command npm init:
   Follow the interactive prompts to make desired changes to the information in the package.json file. You can input new values or modify existing ones.

At the end of the process, npm will prompt you to confirm the settings. If you are satisfied with the changes, confirm and the package.json file will be updated with the new information.

# Installing dependencies:

```bash
$ npm install
express
nodemon
ts-node
jsonwebtoken
mongodb
dotenv
```

# Installing dev dependencies:

```bash
$ npm install --save-dev
@types/express
@types/bcrypt
@types/jsonwebtoken
@types/uuid
@types/mongoose
```

Environment variables management (dotenv) is yet to be implemented for sensitive data security.

# Technologies and Programming Languages Used:

TypeScript
Node.js
Express.js
MongoDB
JWT (JSON Web Tokens)
RESTful API
Git

# Project Status Notes:

- Middleware to control role-based access to endpoints is missing.
- Cart and its management are partially implemented, lacking a delete function to remove a product and clear the cart.
- Orders functionality is not implemented and remains untested.
- Furthermore, as this is an ongoing project, a code cleanup and refactoring have not been conducted. Therefore, you may encounter code repetitions or unused functions.

# Authentication API Endpoints:

- POST /api/auth/register: Allows generic users to register by providing necessary information like name, email, and password. COMPLETE
- POST /api/auth/admin/register: Allows admin users to register by providing necessary information like name, email, and password.
- POST /api/auth/login: Allows users to log in using their credentials. COMPLETE
- GET /api/auth/logout: Allows users to log out. COMPLETE
- GET /api/auth/user: Returns information of the currently authenticated user (generic or admin). COMPLETE

# Product Management API Endpoints:

- GET /api/products: Returns the complete list of products available in the catalog. COMPLETE
- GET /api/products/:id: Returns details of a single product identified by its ID. COMPLETE
- POST /api/products: Allows admin users to add a new product to the catalog.
  COMPLETED WITHOUT ROLE-BASED MIDDLEWARE AND RESTRICTIONS
- PUT /api/products/:id: Allows admin users to modify information of an existing product. INCOMPLETE
- DELETE /api/products/:id: Allows admin users to delete a product from the catalog. COMPLETE

# Cart Management API Endpoints:

- GET /api/cart: Returns the current contents of the user's cart. COMPLETE
- POST /api/cart/add/:id: Adds a product to the user's cart. NOT FULLY FUNCTIONAL
- DELETE /api/cart/remove/:id: Removes a product from the user's cart. NOT IMPLEMENTED
- DELETE /api/cart/clear: Empties the user's cart. NOT IMPLEMENTED

# Order Management API Endpoints:

- GET /api/orders: Returns the order history of the user. Optional: Implemented pagination system to enhance API performance.
- POST /api/orders: Allows users to create a new order from products currently in the cart, with necessary shipping data.
- GET /api/orders/:id: Returns details of a single order identified by its ID.
- PUT /api/orders/:id: Allows admins to update the status of an existing order.
- DELETE /api/orders/:id: Allows admins to delete an order. Hint: Modify the order status.
