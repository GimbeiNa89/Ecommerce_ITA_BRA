import express from "express";
import { router as usersApi } from "./routes/users.route";
import { router as productsApi } from "./routes/products.route";
import { router as ordersApi } from "./routes/orders.route";
import { router as cartsApi } from "./routes/carts.route";
import {router as authApi} from "./routes/auth.route";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "SERVER IS RUNNING!" });
});

app.use("/users", usersApi);
app.use("/products", productsApi);
app.use("/orders", ordersApi);
app.use("/carts", cartsApi);
app.use("/auth", authApi);


export default app;
