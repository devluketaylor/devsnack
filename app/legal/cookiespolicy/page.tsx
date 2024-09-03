import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import PageLayout from "@/components/shared/PageLayout";
import Link from "next/link";
import React from "react";

const CookiesPolicy = () => {
	return (
		<>
			<Navbar />
			<PageLayout className="py-16">
				<div>
					<h1 className="text-3xl font-bold mb-6">Cookies Policy</h1>
					<p className="mb-4">
						Welcome to DevSnack! This Cookies Policy explains how we use cookies
						and similar technologies to recognize you when you visit our
						website. It outlines what cookies are, why we use them, and how you
						can manage them.
					</p>

					<h2 className="text-2xl font-bold mt-6 mb-4">What Are Cookies?</h2>
					<p className="mb-4">
						Cookies are small text files placed on your device when you visit a
						website. They help websites remember your actions and preferences,
						such as your login information or language preference, to provide a
						more personalized experience.
					</p>

					<h2 className="text-2xl font-bold mt-6 mb-4">Why We Use Cookies</h2>
					<p className="mb-4">We use cookies for several reasons:</p>
					<ul className="list-disc list-inside mb-4">
						<li>
							<strong>Essential Cookies:</strong> These cookies are crucial for
							the website to function properly. They allow you to navigate our
							site and use its features, such as accessing secure areas.
						</li>
						<li>
							<strong>Performance Cookies:</strong> These cookies help us
							analyze how visitors use our website and monitor website
							performance. This helps us provide a high-quality experience by
							customizing our offering based on usage data.
						</li>
						<li>
							<strong>Functionality Cookies:</strong> These cookies allow the
							website to remember your preferences and provide enhanced
							features, such as remembering your name or preferences on
							subsequent visits.
						</li>
						<li>
							<strong>Advertising Cookies:</strong> These cookies are used to
							deliver ads that are more relevant to you and your interests. They
							also help us measure the effectiveness of our advertising
							campaigns.
						</li>
					</ul>

					<h2 className="text-2xl font-bold mt-6 mb-4">Managing Cookies</h2>
					<p className="mb-4">
						You have the right to decide whether to accept or reject cookies.
						You can manage your cookie preferences through your web browser
						settings. Below are links to guides on how to manage cookies in
						different browsers:
					</p>
					<ul className="list-disc list-inside mb-4">
						<li>
							<Link
								href="https://support.google.com/chrome/answer/95647?hl=en"
								target="_blank"
								rel="noopener noreferrer"
								className="text-primary underline"
							>
								Chrome
							</Link>
						</li>
						<li>
							<Link
								href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox"
								target="_blank"
								rel="noopener noreferrer"
								className="text-primary underline"
							>
								Firefox
							</Link>
						</li>
						<li>
							<Link
								href="https://support.apple.com/en-us/HT201265"
								target="_blank"
								rel="noopener noreferrer"
								className="text-primary underline"
							>
								Safari
							</Link>
						</li>
						<li>
							<Link
								href="https://support.microsoft.com/en-us/help/278835/how-to-delete-cookie-files-in-internet-explorer"
								target="_blank"
								rel="noopener noreferrer"
								className="text-primary underline"
							>
								Internet Explorer
							</Link>
						</li>
					</ul>
					<p className="mb-4">
						Please note that blocking or deleting cookies might impact your
						experience on our website and limit some of its functionality.
					</p>

					<h2 className="text-2xl font-bold mt-6 mb-4">
						Changes to This Policy
					</h2>
					<p className="mb-4">
						We may update this Cookies Policy from time to time. Any changes
						will be posted on this page with an updated effective date. We
						encourage you to review this policy periodically.
					</p>

					<h2 className="text-2xl font-bold mt-6 mb-4">Contact Us</h2>
					<p className="mb-4">
						If you have any questions about this Cookies Policy or our use of
						cookies, please contact us at{" "}
						<a
							href="mailto:support@devsnack.com"
							className="text-primary underline"
						>
							support@devsnack.com
						</a>
						.
					</p>
				</div>
			</PageLayout>
			<Footer />
		</>
	);
};

export default CookiesPolicy;
