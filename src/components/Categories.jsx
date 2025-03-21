import CategoryForm from "./CategoryForm";

const Categories = ({
	items,
	addItem,
	toggleItem,
	removeItem,
	clearCategory,
}) => {
	return (
		<>
			<h2>Grocery List</h2>
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
					categoryEmoji2="🥫"
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
				<CategoryForm
					categoryName="Drinks"
					categoryKey="drinks"
					categoryEmoji1="🥤"
					categoryEmoji2="🧃"
					type={items.drinks}
					addItem={addItem}
					toggleItem={toggleItem}
					removeItem={removeItem}
					clearCategory={clearCategory}
				/>
			</div>
		</>
	);
};

export default Categories;
