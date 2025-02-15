import { nanoid } from "nanoid";

export const weeklyItems = {
	produce: [
		{ id: nanoid(), name: "Avocados", quantity: 4, purchased: false },
		{ id: nanoid(), name: "Apples", quantity: 4, purchased: false },
	],
	protein: [
		{ id: nanoid(), name: "Ground turkey", quantity: 1, purchased: false },
	],
};
