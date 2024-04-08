import express from "express";

export const app = express();

app.use(express.json());

app.get("/", (req, res) => {
	res.json({ message: "Server is online" });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

