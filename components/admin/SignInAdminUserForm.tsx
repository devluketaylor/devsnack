"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const SignInAdminUserForm = () => {
	const schema: ZodType = z.object({
		email: z.string().email({ message: "Invalid email address" }),
		password: z
			.string()
			.min(8, { message: "Password must be at least 8 characters" })
			.max(255, { message: "Password is too long" }),
	});

	type ValidationSchemaType = z.infer<typeof schema>;

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ValidationSchemaType>({
		resolver: zodResolver(schema),
	});

	return (
		<Card className="max-w-md mx-auto mt-32">
			<CardHeader>
				<CardTitle>Sign In</CardTitle>
			</CardHeader>
			<CardContent>
				<form className="flex flex-col gap-3">
					<div>
						<Input placeholder="Email" {...register("email")} />
					</div>

					<div>
						<Input
							placeholder="Password"
							type="password"
							{...register("password")}
						/>
					</div>

					<div>
						<Button type="submit">Sign In</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
};

export default SignInAdminUserForm;
