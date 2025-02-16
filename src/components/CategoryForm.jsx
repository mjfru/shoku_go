import { nanoid } from "nanoid";
import { useState } from "react";

const CategoryForm = ({
	categoryName,
  categoryKey,
	categoryEmoji1,
	categoryEmoji2,
	type,
	addItem,
	toggleItem,
	removeItem,
	clearCategory,
}) => {
	const [item, setItem] = useState("");
	const [quantity, setQuantity] = useState(1);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!item.trim()) {
			//? Possible place for a toast
			return;
		}
		addItem(categoryKey, item, quantity);
		setItem("");
		setQuantity(1);
	};

	const handleClearCategory = (e) => {
		e.preventDefault();
		clearCategory(categoryKey);
	};

	return (
		<div>
			<h2>
				{categoryEmoji1} {categoryName} {categoryEmoji2}
			</h2>
			{type.map((groceryItem) => {
				return (
					<div key={nanoid()}>
						<input
							type="checkbox"
							checked={groceryItem.purchased}
							onChange={() =>
								toggleItem(categoryKey, groceryItem.id)
							}
						/>
						<p
							style={{
								textTransform: "capitalize",
								textDecoration: groceryItem.purchased && "line-through",
							}}
						>
							{groceryItem.quantity} x {groceryItem.name}
						</p>
						<button
							onClick={() =>
								removeItem(categoryKey, groceryItem.id)
							}
						>
							Delete
						</button>
					</div>
				);
			})}
			<form onSubmit={handleSubmit}>
				<label>Quantity:</label>
				<input
					type="number"
					value={quantity}
					onChange={(e) => setQuantity(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Product name"
					value={item}
					onChange={(e) => setItem(e.target.value)}
				/>
				<button type="submit">Add</button>
				<button onClick={handleClearCategory}>Clear {categoryName} List</button>
			</form>
		</div>
	);
};

export default CategoryForm;
