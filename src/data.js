import { nanoid } from "nanoid";

export const weeklyItems = {
	produce: [
		{ id: nanoid(), name: "Avocados", quantity: 4, purchased: false },
		{ id: nanoid(), name: "Apples", quantity: 4, purchased: false },
	],
	bakery: [
		{ id: nanoid(), name: "Loaf of Bread", quantity: 1, purchased: false },
	],
	dryGoods: [],
	protein: [
		{ id: nanoid(), name: "Ground turkey", quantity: 1, purchased: false },
	],
	dairy: [{ id: nanoid, name: "Yogurt", quantity: 6, purchased: false }],
  frozen: [],
  other: [],
};
