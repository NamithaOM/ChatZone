import mongoose from "mongoose";
export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "react_chat_app",
    })
    .then(() => {
      console.log("connect to database");
    })
    .catch((err) => {
      console.log(`Error connectiong to database ${err.message || err} `);
    });
};
