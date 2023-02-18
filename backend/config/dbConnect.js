import mongoose from "mongoose";

const connectDataBase = async () => {
  const data = await mongoose.connect(process.env.DB_URI);
  console.log(`Mongodb connected with server: ${data.connection.host}`);
};

export default connectDataBase;
