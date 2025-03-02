import Meal from "./Meal";

const MealPlanner = () => {
	const days = [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
	];

	return (
		<>
			<h2>Dinners for the Week:</h2>
			<div className="meal-planner-container">
				{days.map((day) => {
					return <Meal day={day} key={day} />;
				})}
			</div>
		</>
	);
};

export default MealPlanner;
