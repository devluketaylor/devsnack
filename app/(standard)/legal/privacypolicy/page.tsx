import Footer from "@/components/standard/Footer";
import Navbar from "@/components/standard/Navbar";
import PageLayout from "@/components/shared/PageLayout";
import React from "react";

const PrivacyPolicy = () => {
	return (
		<>
			<Navbar />
			<PageLayout className="py-16">
				<div>
					<h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
					<p className="mb-2">
						Welcome to DevSnack! We are committed to protecting your personal
						information and your right to privacy. If you have any questions or
						concerns about this privacy notice or our practices with regard to
						your personal information, please contact us at
						support@devsnack.com.
					</p>

					<h2 className="text-2xl font-bold mt-6 mb-4">
						Information We Collect
					</h2>
					<p className="mb-2">
						We collect personal information that you voluntarily provide to us
						when you register on the website, subscribe to the newsletter, or
						otherwise contact us. The personal information we collect may
						include the following:
					</p>
					<ul className="list-disc list-inside mb-4">
						<li>Name and Contact Data (email address)</li>
					</ul>

					<h2 className="text-2xl font-bold mt-6 mb-4">
						How We Use Your Information
					</h2>
					<p className="mb-2">We use the information we collect or receive:</p>
					<ul className="list-disc list-inside mb-4">
						<li>To send you newsletters and promotional emails.</li>
						<li>To respond to your inquiries and offer customer support.</li>
					</ul>

					<h2 className="text-2xl font-bold mt-6 mb-4">
						Sharing Your Information
					</h2>
					<p className="mb-2">
						We do not share your personal information with third parties except
						in the following situations:
					</p>
					<ul className="list-disc list-inside mb-4">
						<li>To comply with legal obligations.</li>
						<li>To protect and defend our rights and property.</li>
						<li>With your consent.</li>
					</ul>

					<h2 className="text-2xl font-bold mt-6 mb-4">
						Cookies and Tracking Technologies
					</h2>
					<p className="mb-2">
						We may use cookies and similar tracking technologies to access or
						store information. You can set your browser to refuse all or some
						browser cookies, or to alert you when cookies are being sent. If you
						choose to disable cookies, some parts of the website may not
						function properly.
					</p>

					<h2 className="text-2xl font-bold mt-6 mb-4">Data Security</h2>
					<p className="mb-2">
						We have implemented appropriate technical and organizational
						security measures designed to protect the security of any personal
						information we process. However, please also remember that we cannot
						guarantee that the internet itself is 100% secure. Although we will
						do our best to protect your personal information, transmission of
						personal information to and from our website is at your own risk.
						You should only access the services within a secure environment.
					</p>

					<h2 className="text-2xl font-bold mt-6 mb-4">Your Privacy Rights</h2>
					<p className="mb-2">
						You have certain rights regarding your personal information,
						including the right to access, correct, or delete your personal
						data. If you wish to exercise any of these rights, please contact us
						at support@devsnack.com. We will respond to your request within a
						reasonable timeframe.
					</p>

					<h2 className="text-2xl font-bold mt-6 mb-4">
						Changes to This Privacy Policy
					</h2>
					<p className="mb-2">
						We may update this privacy notice from time to time. The updated
						version will be indicated by an updated "Revised" date and the
						updated version will be effective as soon as it is accessible. We
						encourage you to review this privacy notice frequently to be
						informed of how we are protecting your information.
					</p>

					<h2 className="text-2xl font-bold mt-6 mb-4">Contact Us</h2>
					<p className="mb-2">
						If you have questions or comments about this policy, you may email
						us at{" "}
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

export default PrivacyPolicy;
