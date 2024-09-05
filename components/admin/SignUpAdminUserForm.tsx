import { AdminUser } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const SignUpAdminUserForm = () => {
	const schema: ZodType<AdminUser> = z.object({
		name: z
			.string()
			.min(1, { message: "Name is required" })
			.max(255, { message: "Name is too long" }),
		email: z.string().email({ message: "Invalid email address" }),
		password: z
			.string()
			.min(8, { message: "Password must be at least 8 characters" })
			.max(255, { message: "Password is too long" }),
		confirmPassword: z
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
		<form>
			<div>
				<Input placeholder="Name" {...register("name")} />
			</div>

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
				<Input
					placeholder="Confirm Password"
					type="text"
					{...register("confirmPassword")}
				/>
			</div>

			<div>
				<Button type="submit">Sign User Up</Button>
			</div>
		</form>
	);
};

export default SignUpAdminUserForm;
