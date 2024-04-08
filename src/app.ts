import express from "express";
import { products } from "./data/products.data";
import { router as usersApi } from "./routes/users.route";
import { router as productsApi } from "./routes/products.route";
import { router as ordersApi } from "./routes/orders.route";
import { router as cartsApi } from "./routes/carts.route";


export const app = express();

app.use(express.json());

app.get("/", (req, res) => {
	res.json({ message: "Server is online" });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.use("/user", usersApi);
app.use("/product", productsApi);
app.use("/order", ordersApi);
app.use("/cart", cartsApi );

