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
		<div className="single-category">
			<h2>
				{categoryEmoji1} {categoryName} {categoryEmoji2}
			</h2>
			{type.map((groceryItem) => {
				return (
					<div key={nanoid()} className="single-item">
						<input
							type="checkbox"
							checked={groceryItem.purchased}
							onChange={() => toggleItem(categoryKey, groceryItem.id)}
						/>
						<p
							style={{
								textTransform: "capitalize",
								textDecoration: groceryItem.purchased && "line-through",
							}}
						>
							{groceryItem.name} ({groceryItem.quantity})
						</p>
						<button className="btn" onClick={() => removeItem(categoryKey, groceryItem.id)}>
							Delete
						</button>
					</div>
				);
			})}
			<form onSubmit={handleSubmit} className="form-container">
				<div className="form-inputs">
					<div className="quantity-container">
          <label>Quantity: </label>
					<input
						type="number"
            min="1"
						value={quantity}
						className="quantity-input"
						onChange={(e) => setQuantity(e.target.value)}
					/>
          </div>
          <div className="name-add-container">
					<input
						type="text"
						placeholder="Product name"
						value={item}
            className="item-name"
						onChange={(e) => setItem(e.target.value)}
					/>
					<button type="submit" className="btn add-btn">
						Add
					</button>

          </div>
				</div>
				<button className="btn" onClick={handleClearCategory}>Clear {categoryName} List</button>
			</form>
		</div>
	);
};

export default CategoryForm;
