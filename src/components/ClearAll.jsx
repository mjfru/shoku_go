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
		<button onClick={() => handleClick()}>Clear All</button>
	);
};

export default ClearAll;
