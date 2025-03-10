const Header = ({ toggleGrocery, toggleMeals, display }) => {
	return (
		<div className="header-container">
			<h1>
				<span className="shoku-text">Shoku</span>
				<span className="logo">食</span>
				<span className="go-text">GO</span>
			</h1>
			<div className="header-buttons">
				<div className={display ? "btn nav-btn nav-selected" : "btn nav-btn"} onClick={toggleGrocery}>
					Grocery List
				</div>
				<div className={!display ? "btn nav-btn nav-selected" : "btn nav-btn"} onClick={toggleMeals}>
					Meal Planner
				</div>
			</div>
		</div>
	);
};

export default Header;
