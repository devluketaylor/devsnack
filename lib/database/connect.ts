import mongoose from "mongoose";

const connectToDatabase = async () => {
	const mongoURI = process.env.MONGO_URI;

	if (!mongoURI) {
		return console.log(
			"🔴 Please define the MONGO_URI environment variable inside .env.local"
		);
	}

	await mongoose.connect(mongoURI);

	mongoose.connection.on("connected", () => {
		console.log("🟢 Connected To MongoDB");
	});

	mongoose.connection.on("error", (err) => {
		console.log("🔴 Error Connecting To MongoDB", err);
	});

	mongoose.connection.on("disconnected", () => {
		console.log("🟠 Disconnected From MongoDB");
	});
};

export default connectToDatabase;
