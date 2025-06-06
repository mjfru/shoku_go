// Hooks
import { useState } from "react";
// Data
import { weeklyItems } from "./data";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ButtonContainer from "./components/ButtonContainer";

// 3rd Party Libraries
import { nanoid } from "nanoid";
import Categories from "./components/Categories";
import MealPlanner from "./components/MealPlanner";

// Saving data to local storage:
const setLocalStorage = (items) => {
	localStorage.setItem("groceryItems", JSON.stringify(items || weeklyItems));
};

// Loading that data from local storage:
const getLocalStorage = () => {
	try {
		const storedList = localStorage.getItem("groceryItems");
		return storedList ? JSON.parse(storedList) : weeklyItems;
	} catch (error) {
		console.error(
			"Cannot retrieve previous data, restoring to defaults.",
			error
		);
		return weeklyItems;
	}
};

function App() {
	// const [items, setItems] = useState(weeklyItems);
	const [items, setItems] = useState(getLocalStorage());
	
  // Needs to be created before used in state:
	const getDisplay = () => {
		const storedDisplay = localStorage.getItem("displayState");
    // If there is no boolean value, default it to true to display the grocery list:
		return storedDisplay !== null ? JSON.parse(storedDisplay) : true;
	};
	// Getting display state, allowing users to pick up on the component they left off on:
	const [display, setDisplay] = useState(getDisplay());

	const toggleGrocery = () => {
		setDisplay(true);
		localStorage.setItem("displayState", JSON.stringify(true));
	};

	const toggleMeals = () => {
		setDisplay(false);
		localStorage.setItem("displayState", JSON.stringify(false));
	};

	const addItem = (category, itemName, itemQuantity) => {
		const newItem = {
			name: itemName,
			quantity: itemQuantity,
			purchased: false,
			id: nanoid(),
		};
		setItems((prevItems) => {
			const updatedItems = {
				...prevItems,
				//* Dynamic rendering: [category] sets the key of the pair from our arguments and prevItems[category] gives you the current list of items for that category (Ex: prevItems.produce)
				[category]: [...(prevItems[category] || []), newItem],
			};
			setLocalStorage(updatedItems);
			return updatedItems;
		});
	};

	const toggleItem = (category, itemId) => {
		setItems((prevItems) => {
			const updatedItems = {
				...prevItems,
				[category]: prevItems[category].map((item) =>
					item.id === itemId ? { ...item, purchased: !item.purchased } : item
				),
			};
			setLocalStorage(updatedItems);
			return updatedItems;
		});
	};

	const removeItem = (category, itemId) => {
		setItems((prevItems) => {
			const updatedItems = {
				...prevItems,
				[category]: prevItems[category].filter((item) => item.id !== itemId),
			};
			setLocalStorage(updatedItems);
			return updatedItems;
		});
	};

	const clearCategory = (category) => {
		setItems((prevItems) => {
			const updatedItems = { ...prevItems, [category]: [] };
			setLocalStorage(updatedItems);
			return updatedItems;
		});
	};

	return (
		<div className="app-container">
			<Header toggleGrocery={toggleGrocery} toggleMeals={toggleMeals} display={display}/>
			<div className="main-content">
				{display ? (
					<>
						<Categories
							items={items}
							addItem={addItem}
							toggleItem={toggleItem}
							removeItem={removeItem}
							clearCategory={clearCategory}
						/>
						<ButtonContainer
							setItems={setItems}
							setLocalStorage={setLocalStorage}
						/>
					</>
				) : (
					<MealPlanner />
				)}
			</div>
			<Footer />
		</div>
	);
}

export default App;
