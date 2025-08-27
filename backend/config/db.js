import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`✅ MongoDB connected: ${conn.connection.name}`);
    } catch (error) {
        console.error("❌ Database connection error:", error.message);
        process.exit(1); // Stop the server on connection failure
    }
};

export default connectDb;
