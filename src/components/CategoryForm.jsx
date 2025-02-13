const CategoryForm = ({ categoryName, categoryEmoji1, categoryEmoji2 }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			<h2>
				{categoryEmoji1} {categoryName} {categoryEmoji2}
			</h2>
			<form onSubmit={handleSubmit}>
				<label>Example Label</label>
				<input type="number" value="1" />
				<input type="text" />
				<button type="submit">Add</button>
			</form>
		</div>
	);
};

export default CategoryForm;
