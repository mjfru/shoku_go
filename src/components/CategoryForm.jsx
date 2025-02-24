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
			<div className="items-container">
				{type.length === 0 ? (
					<p className="empty">List is empty!</p>
				) : (
					type.map((groceryItem) => {
						return (
							<div key={nanoid()} className="single-item">
								<input
									type="checkbox"
									checked={groceryItem.purchased}
									onChange={() => toggleItem(categoryKey, groceryItem.id)}
								/>
								<p
									style={{
										textDecoration: groceryItem.purchased && "line-through",
										textDecorationThickness: "3px",
                    textDecorationColor: "#3f3f3f"
									}}
								>
									{groceryItem.name} ({groceryItem.quantity})
								</p>
								<button
									className="btn delete-btn"
									onClick={() => removeItem(categoryKey, groceryItem.id)}
								>
									Delete
								</button>
							</div>
						);
					})
				)}
			</div>
			<form onSubmit={handleSubmit} className="form-container">
				<div className="form-inputs">
					<div className="quantity-container">
						<label>Quantity: </label>
						<input
							type="number"
							min="1"
							value={quantity}
							onChange={(e) => setQuantity(e.target.value)}
						/>
					</div>
					<div className="name-add-container">
						<input
							type="text"
							placeholder="Product name"
							value={item}
							// className="item-name"
							onChange={(e) => setItem(e.target.value)}
						/>
						<button type="submit" className="btn add-btn">
							Add
						</button>
					</div>
				</div>
				<div className="clear-one-container">
					<button className="btn clear-one-btn" onClick={handleClearCategory}>
						Clear {categoryName} List
					</button>
				</div>
			</form>
		</div>
	);
};

export default CategoryForm;
