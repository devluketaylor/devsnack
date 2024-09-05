"use server";

import connectToDatabase from "./database/connect";
import AdminUserModel from "./database/models/admin-user";
import NewsletterModel from "./database/models/newsletter";
import { AdminUser, Newsletter } from "./types";

export const subscribeToNewsletter = async ({
	email,
	firstName,
	lastName,
}: Newsletter) => {
	// Connect to database
	await connectToDatabase();

	// Save email to database

	try {
		const res = await NewsletterModel.create({
			email: email,
			firstName: firstName,
			lastName: lastName,
		});
	} catch (error) {
		console.log("🔴 Error saving email to database", error);
	}
};

export const addAdminUser = async ({ name, email, password }: AdminUser) => {
	await connectToDatabase();

	try {
		await AdminUserModel.create({
			name,
			email,
			password,
		});
	} catch (error) {
		console.log("🔴 Error saving admin user to database", error);
	}
};
