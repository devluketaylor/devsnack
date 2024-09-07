export type Reply<T> = {
	success: boolean;
	message: string;
	data?: T;
};

export type Newsletter = {
	firstName: string;
	lastName: string;
	email: string;
};

export type AdminUser = {
	name: string;
	email: string;
	password: string;
};

export type Post = {
	author: string;
	thumbnail: string;
	title: string;
	description: string;
	content: JSON;
};
