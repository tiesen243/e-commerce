import mongoose from "mongoose";

const connectToDB = async (MONGODB_URI: string) => {
  try {
    await mongoose.connect(MONGODB_URI, {});
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
  }
};

export default connectToDB;
