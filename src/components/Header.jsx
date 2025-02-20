const Header = () => {
	return (
		<div className="header-container">
			<h1>
				<span className="shoku-text">Shoku</span>
				<span className="logo">食</span>
				<span className="go-text">GO</span>
			</h1>
			<div className="header-buttons">
				<button className="btn">Grocery List</button>
				<button className="btn">Meal Planner</button>
			</div>
		</div>
	);
};

export default Header;
