import SignInAdminUserForm from "@/components/admin/SignInAdminUserForm";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
	title: "$ Dev Snack ~ Admin Panel",
};

const AdminLayout = ({ children }: { children: ReactNode }) => {
	return <SignInAdminUserForm />;
};

export default AdminLayout;
