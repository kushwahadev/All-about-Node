import mongoose from "mongoose";

const NAME = "nodeTut";
const db = async () => {
  try {
    const connectionDB = await mongoose.connect(
      `${process.env.MONGODB_URI}/${NAME}`
    );

    console.log("connection success");
  } catch (err) {
    console.error(err, "db is not connected ");
  }
};

export default db;
