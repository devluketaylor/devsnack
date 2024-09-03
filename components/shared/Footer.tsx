import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const Footer = () => {
	return (
		<footer className="max-w-5xl px-5 mx-auto">
			<div className="flex justify-between">
				<div>
					<p className="text-3xl">{">_ "}devsnack</p>

					<p className="text-neutral-200 font-sans text-xs">
						devsnack llc @ 2024
					</p>
				</div>

				<div>
					<div className="flex gap-10">
						<ul>
							<p className="text-xl text-primary">socials</p>
							<FooterLink text="twitter" isOutsideLink link="" />
							<FooterLink text="instagram" isOutsideLink link="" />
							<FooterLink text="facebook" isOutsideLink link="" />
						</ul>
						<ul>
							<p className="text-xl text-primary">legal</p>
							<FooterLink text="cookies policy" link="/legal/cookiespolicy" />
							<FooterLink text="privacy policy" link="/legal/privacypolicy" />
							<FooterLink
								text="terms of service"
								link="/legal/termsofservice"
							/>
						</ul>
					</div>

					<div></div>
				</div>
			</div>
		</footer>
	);
};

type FooterLinkProps = {
	text: string;
	isOutsideLink?: boolean;
	link: string;
};
const FooterLink = ({ text, isOutsideLink, link }: FooterLinkProps) => {
	return (
		<Link href={link}>
			<li className="flex items-center gap-1">
				{text} {isOutsideLink && <MdArrowOutward className="w-3 h-3" />}
			</li>
		</Link>
	);
};

export default Footer;
