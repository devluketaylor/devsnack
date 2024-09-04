import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import PageLayout from "@/components/shared/PageLayout";
import Link from "next/link";

const LegalPage = () => {
	return (
		<>
			<Navbar />
			<PageLayout className="py-16">
				<ol className="min-h-[63vh]">
					<Link href="/legal/cookiespolicy">
						<li>cookies policy</li>
					</Link>
					<Link href="/legal/privacypolicy">
						<li>privacy policy</li>
					</Link>
					<Link href="/legal/termsofservice">
						<li>terms of service</li>
					</Link>
				</ol>
			</PageLayout>
			<Footer />
		</>
	);
};

export default LegalPage;
