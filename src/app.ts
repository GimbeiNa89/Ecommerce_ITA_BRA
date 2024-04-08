import express from "express";
import { router as usersApi } from "./routes/users.route";
import { router as productsApi } from "./routes/products.route";
import { router as ordersApi } from "./routes/orders.route";
import { router as cartsApi } from "./routes/carts.route";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "SERVER IS RUNNING!" });
});

app.use("/user", usersApi);
app.use("/product", productsApi);
app.use("/order", ordersApi);
app.use("/cart", cartsApi);

export default app;
