import { weeklyItems } from "../data";

const RestoreValues = ({ setItems, setLocalStorage }) => {
	const handleClick = () => {
		setItems(() => {
			const defaultList = weeklyItems;
			setLocalStorage(defaultList);
			return defaultList;
		});
	};
	return (
		<button className="btn global-btn restore-btn" onClick={handleClick}>
			Restore Default Values
		</button>
	);
};

export default RestoreValues;
