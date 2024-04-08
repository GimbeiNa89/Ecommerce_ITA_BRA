import mongoose from "mongoose";
import app from "./app";
const PORT = 3000;

const CONNECTION_URL: string = "mongodb://localhost:27017";

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    console.log("You're connected with MongoDB");

    app.listen(PORT, () => {
      console.log(`Server is online at http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.error(error));
