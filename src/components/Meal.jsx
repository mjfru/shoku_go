import { useEffect, useState } from "react";

const setLocalStorage = (meals) => {
	localStorage.setItem("weeklyMeals", JSON.stringify(meals || ""));
};

const getLocalStorage = () => {
	try {
		const storedList = localStorage.getItem("weeklyMeals");
		return storedList ? JSON.parse(storedList) : {};
	} catch (error) {
		console.error(
			"Cannot retrieve previous data, restoring to defaults: ",
			error
		);
		return {};
	}
};

const Meal = ({ day }) => {
	const [meals, setMeals] = useState(getLocalStorage());
	const [meal, setMeal] = useState(meals[day] || "");

	useEffect(() => {
		setLocalStorage(meals);
	}, [meals]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!meal.trim()) {
			//? Toast here
			return;
		}
		const updatedMeals = { ...meals, [day]: meal };
		setMeals(updatedMeals);
		setMeal("");
	};

	const handleClear = () => {
		const updatedMeals = { ...meals };
		delete updatedMeals[day];
		setMeals(updatedMeals);
		setMeal("");
	};

	return (
		<div className="day-container">
			<h3>{day}:</h3>
			<h4 className={meals[day] ? "single-meal" : "empty-meal"}>
				{meals[day]}
			</h4>
			<form onSubmit={handleSubmit}>
				<div className="meal-input">
					<input
						type="text"
						placeholder="New meal..."
						value={meal}
						style={{ display: meals[day] ? "none" : "flex" }}
						onChange={(e) => setMeal(e.target.value)}
					/>
					{!meals[day] ? (
						<button
							type="submit"
							className="btn add-btn"
							disabled={!meal.trim()}
						>
							Add
						</button>
					) : (
						<button
							className="btn"
							onClick={handleClear}
							disabled={!meals[day]}
						>
							Clear
						</button>
					)}
				</div>
			</form>
		</div>
	);
};

export default Meal;
