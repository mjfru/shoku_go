// Hooks
import { useState } from "react";
// Data
import { weeklyItems } from "./data";

// Components
import Header from "./components/Header";
import CategoryForm from "./components/CategoryForm";
import Footer from "./components/Footer";
import ButtonContainer from "./components/ButtonContainer";

// 3rd Party Libraries
import { nanoid } from "nanoid";

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
			"Cannot retrieve previous data, restoring to defaults: ",
			error
		);
		return weeklyItems;
	}
};

function App() {
	// const [items, setItems] = useState(weeklyItems);
	const [items, setItems] = useState(getLocalStorage());

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
		<>
			<Header />
			<div className="category-container">
				<CategoryForm
					categoryName="Produce"
					categoryKey="produce"
					categoryEmoji1="🍎"
					categoryEmoji2="🥑"
					type={items.produce}
					addItem={addItem}
					toggleItem={toggleItem}
					removeItem={removeItem}
					clearCategory={clearCategory}
				/>
				<CategoryForm
					categoryName="Bakery"
					categoryKey="bakery"
					categoryEmoji1="🥯"
					categoryEmoji2="🥖"
					type={items.bakery}
					addItem={addItem}
					toggleItem={toggleItem}
					removeItem={removeItem}
					clearCategory={clearCategory}
				/>
				<CategoryForm
					categoryName="Dry Goods"
					categoryKey="dryGoods"
					categoryEmoji1="🥨"
					categoryEmoji2="🧂"
					type={items.dryGoods}
					addItem={addItem}
					toggleItem={toggleItem}
					removeItem={removeItem}
					clearCategory={clearCategory}
				/>
				<CategoryForm
					categoryName="Dairy"
					categoryKey="dairy"
					categoryEmoji1="🥛"
					categoryEmoji2="🧀"
					type={items.dairy}
					addItem={addItem}
					toggleItem={toggleItem}
					removeItem={removeItem}
					clearCategory={clearCategory}
				/>
				<CategoryForm
					categoryName="Protein"
					categoryKey="protein"
					categoryEmoji1="🍖"
					categoryEmoji2="🥩"
					type={items.protein}
					addItem={addItem}
					toggleItem={toggleItem}
					removeItem={removeItem}
					clearCategory={clearCategory}
				/>
				<CategoryForm
					categoryName="Frozen"
					categoryKey="frozen"
					categoryEmoji1="🧊"
					categoryEmoji2="🍨"
					type={items.frozen}
					addItem={addItem}
					toggleItem={toggleItem}
					removeItem={removeItem}
					clearCategory={clearCategory}
				/>
				<CategoryForm
					categoryName="Household Goods"
					categoryKey="other"
					categoryEmoji1="💡"
					categoryEmoji2="🧼"
					type={items.other}
					addItem={addItem}
					toggleItem={toggleItem}
					removeItem={removeItem}
					clearCategory={clearCategory}
				/>
			</div>
			<ButtonContainer setItems={setItems} setLocalStorage={setLocalStorage} />
			<Footer />
		</>
	);
}

export default App;
