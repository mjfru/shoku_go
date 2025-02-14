// Hooks
import { useState } from "react";
// Data
import { weeklyItems } from "./data";

// Components
import Header from "./components/Header";
import CategoryForm from "./components/CategoryForm";
import Footer from "./components/Footer";
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

  const clearCategory = (category) => {
    setItems((prevItems) => ({
      ...prevItems,
      [category]: []
    }))
  }

	const clearAll = () => {
		setItems({
			produce: [],
			protein: [],
		});
	};

	return (
		<>
			<Header />
			<CategoryForm
				categoryName="Produce"
				categoryEmoji1="🍎"
				categoryEmoji2="🥕"
				type={items.produce}
				addItem={addItem}
        clearCategory={clearCategory}
			/>
			<CategoryForm
				categoryName="Protein"
				categoryEmoji1="🍖"
				categoryEmoji2="🥠"
				type={items.protein}
				addItem={addItem}
        clearCategory={clearCategory}
			/>
			<button onClick={clearAll}>Clear All</button>
			<Footer />
		</>
	);
}

export default App;
