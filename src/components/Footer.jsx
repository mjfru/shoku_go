const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<div className="footer-container">
			<h3>Handcoded and Maintained by MJF - {currentYear}</h3>
			<div className="footer-links">
				<a href="">Github</a>
				<a href="https://mjfru-webdev-port.vercel.app/" target="_blank">Developer Portfolio</a>
			</div>
		</div>
	);
};

export default Footer;
