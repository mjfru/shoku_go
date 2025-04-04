import { nanoid } from "nanoid";
import { useState } from "react";

import {
	produce,
	bakery,
	dryGoods,
	protein,
	dairy,
	frozen,
	other,
	drinks,
} from "../data";

const categoryOptions = {
	produce,
	bakery,
	dryGoods,
	protein,
	dairy,
	frozen,
	other,
	drinks,
};

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
	const [selectOption, setSelectOption] = useState("");

	const optionsList = categoryOptions[categoryKey] || [];

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!item.trim()) {
			//? Possible place for a toast
			return;
		}
		addItem(categoryKey, item, quantity);
		setItem("");
		setQuantity(1);
		setSelectOption("");
	};

	const handleClearCategory = (e) => {
		e.preventDefault();
		clearCategory(categoryKey);
	};

	return (
		<div className="single-category">
			<h2 id="category-header">
				{categoryEmoji1} {categoryName} {categoryEmoji2}
			</h2>
			<div className="items-container">
				{!type || type.length === 0 ? (
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
										textDecorationColor: "#3f3f3f",
									}}
								>
									({groceryItem.quantity}) {groceryItem.name} 
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
						<label id="quantity-label1">Quantity: </label>
						<label id="quantity-label2">Qty: </label>
						<input
							type="number"
							min="1"
							value={quantity}
							onChange={(e) => setQuantity(e.target.value)}
						/>
					</div>
					<div className="name-add-container">
						<div className="grocery-inputs">
							<select
								value={selectOption}
								onChange={(e) => {
									setItem(e.target.value);
									setSelectOption(e.target.value);
								}}
							>
								<option value="">- Common Items -</option>
								{optionsList.map((item) => {
									return (
										<option value={item} key={item}>
											{item}
										</option>
									);
								})}
							</select>
							<input
								type="text"
								placeholder="New Product"
								value={item}
								onChange={(e) => setItem(e.target.value)}
							/>

						</div>
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
