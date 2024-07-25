import mongoose from "mongoose";

const connectMongoDB = async () => {
try {
    const connected =await mongoose.connect(process.env.MONGO_URI);
    console.log("mongo db connected ");
} catch (error) {
    console.error(`mongodb not connected ${error.message}`);
    process.exit(1);
}
};

export default connectMongoDB;