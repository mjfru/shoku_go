// Hooks
import { useState } from "react";
// Data
import { weeklyItems } from "./data";

// Components
import Header from "./components/Header";
import CategoryForm from "./components/CategoryForm";
import Footer from "./components/Footer";

// 3rd Party Libraries
import { nanoid } from "nanoid";

function App() {
	const [items, setItems] = useState(weeklyItems);

	const addItem = (category, itemName, itemQuantity) => {
		const newItem = {
			name: itemName,
			quantity: itemQuantity,
			purchased: false,
			id: nanoid(),
		};
		setItems((prevItems) => ({
			...prevItems,
			//* Dynamic rendering: [category] sets the key of the pair from our arguments and prevItems[category] gives you the current list of items for that category (Ex: prevItems.produce)
			[category]: [...(prevItems[category] || []), newItem],
		}));
	};

	const toggleItem = (category, itemId) => {
		setItems((prevItems) => ({
			...prevItems,
			[category]: prevItems[category].map((item) =>
				item.id === itemId ? { ...item, purchased: !item.purchased } : item
			),
		}));
	};

	const removeItem = (category, itemId) => {
		setItems((prevItems) => ({
			...prevItems,
			[category]: prevItems[category].filter((item) => item.id !== itemId),
		}));
	};

	const clearCategory = (category) => {
		setItems((prevItems) => ({
			...prevItems,
			[category]: [],
		}));
	};

	const clearAll = () => {
		setItems({
			produce: [],
			protein: [],
			dryGoods: [],
		});
	};

	return (
		<>
			<Header />
			<CategoryForm
				categoryName="Produce"
				categoryKey="produce"
				categoryEmoji1="🍎"
				categoryEmoji2="🥕"
				type={items.produce}
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
			<button onClick={clearAll}>Clear All</button>
			<Footer />
		</>
	);
}

export default App;
