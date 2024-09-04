import Footer from "@/components/standard/Footer";
import GetStarted from "@/components/standard/GetStarted";
import Navbar from "@/components/standard/Navbar";
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
