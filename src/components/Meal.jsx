import { useState } from "react";

const Meal = ({ day }) => {
	// The actual list of submitted meals
	const [meals, setMeals] = useState([]);
	// The inputs for the meals
	const [meal, setMeal] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!meal.trim()) {
			//? Toast here
			return;
		}
		setMeals((prevMeals) => {
			return [...prevMeals, meal];
		});
		setMeal("");
	};

	const handleClear = () => {
		setMeals([]);
	};

	return (
		<div className="day-container">
			<h3>{day}:</h3>
			<h4>
				{meals.map((meal, index) => {
					return <div key={index}>{meal}</div>;
				})}
			</h4>
			<form onSubmit={handleSubmit}>
				<div className="meal-input">
					<input
						type="text"
						placeholder="New meal..."
						value={meal}
						onChange={(e) => setMeal(e.target.value)}
					/>
					<button type="submit" className="btn add-btn">
						Add
					</button>
					<button className="btn" onClick={handleClear}>
						Clear
					</button>
				</div>
			</form>
		</div>
	);
};

export default Meal;
