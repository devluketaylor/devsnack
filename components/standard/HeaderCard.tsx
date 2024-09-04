type HeaderCardProps = {
	children: React.ReactNode;
};

const HeaderCard = ({ children }: HeaderCardProps) => {
	return (
		<p className="text-lg text-primary">
			{`>_ `}
			{children}
		</p>
	);
};

export default HeaderCard;
