import mongoose from "mongoose";

const ConnectDB = async () => {
  await mongoose
    .connect("mongodb://localhost:27017/ecommerce")
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log(err));
};

export default ConnectDB;
