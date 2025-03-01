import { useState } from "react";

const Meal = ({ day }) => {
	const [meal, setMeal] = useState("");
	const [inputMeal, setInputMeal] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!meal.trim()) {
			//? Toast here
			return;
		}
		setInputMeal(meal);
		setMeal("");
	};

	return (
		<div className="day-container">
			<h2>{day}:</h2>
			<h3>{inputMeal || ""}</h3>

			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="New meal..."
					value={meal}
					onChange={(e) => setMeal(e.target.value)}
				/>
				<button type="submit" className="btn add-btn" disabled={inputMeal}>
					Add
				</button>
				<button
					className="btn"
					onClick={() => {
						setInputMeal("");
						setMeal("");
					}}
					disabled={!inputMeal}
				>
					Clear
				</button>
			</form>
		</div>
	);
};

export default Meal;
