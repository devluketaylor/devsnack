import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = () => {
	return (
		<nav className="flex items-center max-w-5xl mx-auto justify-between px-4 py-2">
			<Link href="/">
				<p className="text-3xl">{">_ "}devsnack</p>
			</Link>
			<div className="flex gap-1">
				<Button variant="ghost">Login</Button>
				<Button>Subscribe</Button>
			</div>
		</nav>
	);
};

export default Navbar;
