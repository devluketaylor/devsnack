type PageLayoutProps = {
	children: React.ReactNode;
	className?: string;
};

const PageLayout = ({ children, className }: PageLayoutProps) => {
	return (
		<div className={`max-w-5xl mx-auto px-4 ${className}`}>{children}</div>
	);
};

export default PageLayout;
