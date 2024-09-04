import Footer from "@/components/standard/Footer";
import Navbar from "@/components/standard/Navbar";
import PageLayout from "@/components/shared/PageLayout";
import React from "react";

const TermsOfService = () => {
	return (
		<>
			<Navbar />
			<PageLayout className="py-16">
				<div>
					<h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
					<p className="mb-2">
						Welcome to DevSnack! These Terms of Service {"Terms"} govern your
						use of our website and services {"Services"}. By accessing or using
						our Services, you agree to be bound by these Terms. If you do not
						agree to these Terms, please do not use our Services.
					</p>

					<h2 className="text-2xl font-bold mt-6 mb-4">Use of Services</h2>
					<p className="mb-2">
						You must be at least 18 years old to use our Services. You agree to
						use our Services only for lawful purposes and in accordance with
						these Terms. You are responsible for maintaining the confidentiality
						of your account and password and for restricting access to your
						computer or device. You agree to accept responsibility for all
						activities that occur under your account or password.
					</p>

					<h2 className="text-2xl font-bold mt-6 mb-4">
						Prohibited Activities
					</h2>
					<p className="mb-2">
						You agree not to engage in any of the following prohibited
						activities:
					</p>
					<ul className="list-disc list-inside mb-4">
						<li>
							Using the Services for any unlawful purpose or in violation of any
							local, state, national, or international law.
						</li>
						<li>
							Impersonating any person or entity, or falsely stating or
							otherwise misrepresenting your affiliation with a person or
							entity.
						</li>
						<li>
							Interfering with or disrupting the Services or servers or networks
							connected to the Services.
						</li>
						<li>
							Attempting to gain unauthorized access to any portion of the
							Services or any other accounts, computer systems, or networks
							connected to the Services.
						</li>
					</ul>

					<h2 className="text-2xl font-bold mt-6 mb-4">
						Intellectual Property
					</h2>
					<p className="mb-2">
						The content, organization, graphics, design, compilation, and other
						matters related to the Services are protected under applicable
						copyrights, trademarks, and other proprietary (including but not
						limited to intellectual property) rights. The copying,
						redistribution, use, or publication by you of any such matters or
						any part of the Services, except as allowed by these Terms, is
						strictly prohibited.
					</p>

					<h2 className="text-2xl font-bold mt-6 mb-4">Termination</h2>
					<p className="mb-2">
						We may terminate or suspend your access to the Services immediately,
						without prior notice or liability, for any reason whatsoever,
						including without limitation if you breach the Terms. Upon
						termination, your right to use the Services will cease immediately.
					</p>

					<h2 className="text-2xl font-bold mt-6 mb-4">
						Disclaimer of Warranties
					</h2>
					<p className="mb-2">
						The Services are provided "as is" and "as available" without any
						warranties of any kind, either express or implied, including but not
						limited to implied warranties of merchantability, fitness for a
						particular purpose, or non-infringement. We do not warrant that the
						Services will be uninterrupted or error-free, that defects will be
						corrected, or that the Services are free of viruses or other harmful
						components.
					</p>

					<h2 className="text-2xl font-bold mt-6 mb-4">
						Limitation of Liability
					</h2>
					<p className="mb-2">
						In no event shall DevSnack, its directors, employees, or agents be
						liable for any direct, indirect, incidental, special, or
						consequential damages arising out of or in connection with your use
						of or inability to use the Services, whether based on warranty,
						contract, tort (including negligence), or any other legal theory,
						and whether or not we have been informed of the possibility of such
						damage.
					</p>

					<h2 className="text-2xl font-bold mt-6 mb-4">Governing Law</h2>
					<p className="mb-2">
						These Terms shall be governed and construed in accordance with the
						laws of [Your Country/State], without regard to its conflict of law
						provisions. Our failure to enforce any right or provision of these
						Terms will not be considered a waiver of those rights. If any
						provision of these Terms is held to be invalid or unenforceable by a
						court, the remaining provisions of these Terms will remain in
						effect.
					</p>

					<h2 className="text-2xl font-bold mt-6 mb-4">
						Changes to These Terms
					</h2>
					<p className="mb-2">
						We reserve the right, at our sole discretion, to modify or replace
						these Terms at any time. If a revision is material, we will try to
						provide at least 30 days notice prior to any new terms taking
						effect. What constitutes a material change will be determined at our
						sole discretion.
					</p>

					<h2 className="text-2xl font-bold mt-6 mb-4">Contact Us</h2>
					<p className="mb-2">
						If you have any questions about these Terms, please contact us at{" "}
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

export default TermsOfService;
