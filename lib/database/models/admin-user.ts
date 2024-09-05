import { AdminUser } from "@/lib/types";
import mongoose, { models, Schema } from "mongoose";

const adminUserSchema = new Schema<AdminUser>(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const AdminUserModel =
	(models.AdminUser as mongoose.Model<AdminUser>) ||
	mongoose.model<AdminUser>("AdminUser", adminUserSchema);

export default AdminUserModel;
