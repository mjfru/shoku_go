const ClearAll = ({ setItems }) => {
	const handleClick = () => {
		setItems({
			produce: [],
			bakery: [],
			dryGoods: [],
			protein: [],
			dairy: [],
			frozen: [],
			other: [],
		});
	};

	return (
		<button className="btn" onClick={() => handleClick()}>Clear All</button>
	);
};

export default ClearAll;
