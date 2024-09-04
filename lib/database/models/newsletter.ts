import { Newsletter } from "@/lib/types";
import mongoose, { models, Schema } from "mongoose";

const newsletterSchema = new Schema<Newsletter>(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const NewsletterModel =
	(models.Newsletter as mongoose.Model<Newsletter>) ||
	mongoose.model<Newsletter>("Newsletter", newsletterSchema);

export default NewsletterModel;
