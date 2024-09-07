import Link from "next/link";
import { Button } from "../ui/button";
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";
import NewsletterForm from "./NewsletterForm";

const Navbar = () => {
	return (
		<nav className="flex items-center max-w-5xl mx-auto justify-between px-4 py-2">
			<Link href="/">
				<p className="text-3xl">{">_ "}devsnack</p>
			</Link>
			<div>
				<Dialog>
					<DialogTrigger asChild>
						<Button>Subscribe</Button>
					</DialogTrigger>
					<DialogContent>
						<DialogTitle>Subscribe to DevSnack</DialogTitle>

						<NewsletterForm />
					</DialogContent>
				</Dialog>
			</div>
		</nav>
	);
};

export default Navbar;
