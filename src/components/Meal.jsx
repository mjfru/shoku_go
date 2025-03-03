import { useEffect, useState } from "react";

//* Because of { day } being passed down from the parent component, each of these components has the unique identifier (Tuesday, Friday, etc.)
//* As a result, we have seven arrays holding meals for each day of the week and can utilize that into our logic.
const setLocalStorage = (day, meals) => {
	const storedMeals = getLocalStorage();
	console.log(meals);
	storedMeals[day] = meals;
	localStorage.setItem("mealsOfTheWeek", JSON.stringify(storedMeals));
};

const getLocalStorage = () => {
	try {
		const storedMeals = localStorage.getItem("mealsOfTheWeek");
		return storedMeals ? JSON.parse(storedMeals) : {};
	} catch (error) {
		console.error(
			"Cannot retrieve previous data, restoring to defaults.",
			error
		);
		return {};
	}
};

const Meal = ({ day }) => {
	// The actual list of submitted meals
	const [meals, setMeals] = useState(getLocalStorage()[day] || []);
	// The inputs for the meals
	const [meal, setMeal] = useState("");

	// Syncing local storage to any change in state:
	useEffect(() => {
		setLocalStorage(day, meals);
	}, [meals, day]);

	const handleSubmit = (e) => {
		e.preventDefault();
		//? Toast here
		if (!meal.trim()) return;
		setMeals((prevMeals) => [...prevMeals, meal]);
		setMeal("");
	};

	const handleClear = () => {
		setMeals([]);
		setLocalStorage(day, []);
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
