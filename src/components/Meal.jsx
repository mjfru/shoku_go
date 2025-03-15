import { useEffect, useState } from "react";
import { mealIdeas } from "../data";

//* Because of { day } being passed down from the parent component, each of these components has the unique identifier (Tuesday, Friday, etc.)
//* As a result, we have seven arrays holding meals for each day of the week and can utilize that into our logic.
const setLocalStorage = (day, meals) => {
	const storedMeals = getLocalStorage();
	// console.log(meals);
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
	const [selectOption, setSelectOption] = useState("");

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
		setSelectOption("");
	};

	const handleClear = () => {
		setMeals([]);
		setLocalStorage(day, []);
	};

	return (
		<div className="day-container">
			<h3>{day}:</h3>
			{meals.map((meal, index) => {
				return (
					<p className="single-meal" key={index}>
						{meal}
					</p>
				);
			})}
			<form onSubmit={handleSubmit}>
				<div className="meal-form">
					<div className="meal-inputs">
						<input
							type="text"
							placeholder={
								meals.length <= 2 ? "New meal..." : "Maximum Meals Reached"
							}
							value={meal}
							onChange={(e) => setMeal(e.target.value)}
						/>
						<select
							value={selectOption}
							onChange={(e) => {
								setMeal(e.target.value);
								setSelectOption(e.target.value);
							}}
						>
							<option value="">- Meal Ideas -</option>
							{mealIdeas.map((meal) => {
								return (
									<option value={meal} key={meal}>
										{meal}
									</option>
								);
							})}
						</select>
					</div>
					<button
						type="submit"
						className="btn add-btn"
						disabled={meals.length > 2}
					>
						Add
					</button>
				</div>
			<div className="clear-meals clear-one-container">
				<button
					className="btn clear-one-btn"
					onClick={handleClear}
					disabled={meals.length === 0}
				>
					Clear
				</button>
			</div>
			</form>
		</div>
	);
};

export default Meal;
