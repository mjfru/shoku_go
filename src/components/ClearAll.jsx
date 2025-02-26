const ClearAll = ({ setItems, setLocalStorage }) => {
	const handleClick = () => {
		setItems(() => {
			const clearedList = {
				produce: [],
				bakery: [],
				dryGoods: [],
				protein: [],
				dairy: [],
				frozen: [],
				other: [],
			};
			setLocalStorage(clearedList);
			return clearedList;
		});
	};

	return (
		<button className="btn" onClick={handleClick}>
			Clear All
		</button>
	);
};

export default ClearAll;
