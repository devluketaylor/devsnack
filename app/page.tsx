import Footer from "@/components/shared/Footer";
import GetStarted from "@/components/shared/GetStarted";
import Navbar from "@/components/shared/Navbar";
import PageLayout from "@/components/shared/PageLayout";

const Home = () => {
	return (
		<div>
			<Navbar />
			<PageLayout>
				<GetStarted />
			</PageLayout>
			<Footer />
		</div>
	);
};

export default Home;
