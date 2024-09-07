"use server";

import connectToDatabase from "./database/connect";
import AdminUserModel from "./database/models/admin-user";
import NewsletterModel from "./database/models/newsletter";
import { AdminUser, Newsletter, Reply } from "./types";

export const subscribeToNewsletter = async ({
	email,
	firstName,
	lastName,
}: Newsletter) => {
	// Connect to database
	if (!email || !firstName || !lastName) {
		return {
			success: false,
			message: "Please fill in all fields",
		} as Reply<void>;
	}

	await connectToDatabase();

	// Save email to database

	try {
		const account = await NewsletterModel.findOne({ email: email });

		if (account) {
			console.log(account);
			return {
				success: false,
				message: "Sorry, this email is already subscribed",
			} as Reply<void>;
		}

		await NewsletterModel.create({
			email: email,
			firstName: firstName,
			lastName: lastName,
		});

		return {
			success: true,
			message: "Email added to newsletter",
		} as Reply<void>;
	} catch (error) {
		console.log("🔴 Error saving email to database", error);
	}
};

export const addAdminUser = async ({ name, email, password }: AdminUser) => {
	if (!name || !email || !password) {
		return {
			success: false,
			message: "Please fill in all fields",
		} as Reply<void>;
	}

	await connectToDatabase();

	try {
		const account = await AdminUserModel.findOne({ email: email });

		if (account)
			return {
				success: false,
				message: "Sorry, this email is already in use",
			} as Reply<void>;

		await AdminUserModel.create({
			name,
			email,
			password,
		});

		return {
			success: true,
			message: "Admin user created successfully",
		} as Reply<void>;
	} catch (error) {
		console.log("🔴 Error saving admin user to database", error);
		return {
			success: false,
			message: "Error saving admin user to database",
		} as Reply<void>;
	}
};
