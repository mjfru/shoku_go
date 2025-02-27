import ClearAll from "./ClearAll";
import RestoreValues from "./RestoreValues";

const ButtonContainer = ({ setItems, setLocalStorage }) => {
	return (
		<div className="global-btn-container">
			<RestoreValues setItems={setItems} setLocalStorage={setLocalStorage} />
			<ClearAll setItems={setItems} setLocalStorage={setLocalStorage} />
		</div>
	);
};

export default ButtonContainer;
