import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_CONNECTION_URI!);
    console.info(`Connected to mongoDB on port ${conn.connection.port}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;
