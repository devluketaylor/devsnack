"use client";

import { subscribeToNewsletter } from "@/lib/actions";
import { Newsletter } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";

const NewsletterForm = ({ prefilledEmail }: { prefilledEmail?: string }) => {
	const schema: ZodType<Newsletter> = z.object({
		firstName: z
			.string()
			.min(1, { message: "First name is required" })
			.max(255, { message: "First name is too long" }),
		lastName: z
			.string()
			.min(1, { message: "Last name is required" })
			.max(255, { message: "Last name is too long" }),
		email: z.string().email({ message: "Invalid email address" }),
	});

	type ValidationSchemaType = z.infer<typeof schema>;

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ValidationSchemaType>({
		resolver: zodResolver(schema),
		defaultValues: {
			email: prefilledEmail ? prefilledEmail : "",
		},
	});

	const [isLoading, setIsLoading] = useState<boolean>(false);

	const submitData = async (data: Newsletter) => {
		setIsLoading(true);

		const res = await subscribeToNewsletter({
			email: "",
			firstName: "",
			lastName: "",
		});

		toast("Subscribed");

		setIsLoading(false);
	};

	return (
		<form onSubmit={handleSubmit(submitData)}>
			<div className="flex gap-2 mt-8">
				<Input placeholder="First Name" {...register("firstName")} />
				<Input placeholder="Last Name" {...register("lastName")} />
			</div>

			<div className="mt-2">
				<Input placeholder="Email" {...register("email")} />
			</div>

			<Button type="submit" className="w-full mt-2">
				Subscribe
			</Button>
		</form>
	);
};

export default NewsletterForm;
