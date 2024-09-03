import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
	title: "$ Dev Snack ~ Admin Panel",
};

const AdminLayout = ({ children }: { children: ReactNode }) => {
	return <div>admin</div>;
};

export default AdminLayout;
