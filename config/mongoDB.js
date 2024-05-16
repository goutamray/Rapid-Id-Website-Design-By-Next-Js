
import mongoose from "mongoose";

// create mongodb connection 
export const mongoDbConnection = async(req, res) => {
  try {
     const connect = await mongoose.connect(process.env.MONGO_URL);
     console.log(`MongoDB Connection SuccessFull`);
  } catch (error) {
     console.log(`MongoDB Connection Failed`);
  }
}




