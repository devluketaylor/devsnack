"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import HeaderCard from "./HeaderCard";
import NewsletterForm from "./NewsletterForm";

const GetStarted = () => {
	const [email, setEmail] = useState<string>("");
	return (
		<section className=" bg-white/5 rounded-xl my-16">
			<div className="flex gap-2 px-5 py-2">
				<div className="bg-red-500 rounded-full w-3 h-3" />
				<div className="bg-yellow-500 rounded-full w-3 h-3" />
				<div className="bg-green-500 rounded-full w-3 h-3" />
			</div>
			<div className="flex items-center gap-5 p-8 bg-white/5 rounded-b-xl rounded-t-sm">
				<div>
					<HeaderCard>get started</HeaderCard>
					<h1 className="text-2xl">
						Unlock Coding Tips, Tricks & Information Now
					</h1>
					<p className="text-xs font-sans">
						Subscribe to Dev Snack for the latest coding tips, tricks, and
						updates on new libraries. Stay ahead of the curve with curated
						insights and practical advice straight to your inbox!
					</p>
				</div>

				<div className="flex w-full">
					<Input
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Dialog>
						<DialogTrigger asChild>
							<Button>Subscribe</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogTitle>Subscribe to DevSnack</DialogTitle>
							<NewsletterForm prefilledEmail={email} />
						</DialogContent>
					</Dialog>
				</div>
			</div>
		</section>
	);
};

export default GetStarted;
