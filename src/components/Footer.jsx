const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<div className="footer-container">
			<h4>Handcoded by MJF in {currentYear}.</h4>
			<p>Github</p>
			<p>Developer Portfolio</p>
		</div>
	);
};

export default Footer;
