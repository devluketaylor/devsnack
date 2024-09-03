"use server";

import connectToDatabase from "./database/connect";
import NewsletterModel from "./database/models/newsletter";
import { Newsletter } from "./types";

export const subscribeToNewsletter = async ({
	email,
	firstName,
	lastName,
}: Newsletter) => {
	// Connect to database
	await connectToDatabase();

	// Save email to database

	try {
		await NewsletterModel.create({
			email,
			firstName: "luke",
			lastName: "taylor",
		});

		console.log("worker");
	} catch (error) {
		console.log("🔴 Error saving email to database", error);
	}
};
