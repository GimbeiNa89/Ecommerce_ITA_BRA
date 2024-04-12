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

app.use("/api/users", usersApi);
app.use("/api/products", productsApi);
app.use("/api/orders", ordersApi);
app.use("/api/carts", cartsApi);
app.use("/api/auth", authApi);


export default app;
