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

export const produce = ["Apples", "Avocados", "Bananas", "Green Onions", "Kumquats"];

export const bakery = [
	"Bagels",
	"Sandwich Bread",
	"Tortillas (Large)",
	"Tortillas (Small)",
];

export const dryGoods = ["Black Beans", "White Rice"];

export const protein = ["Ground Chicken", "Ground Turkey"];

export const dairy = [
	"Almond Milk",
	"Eggs (Dozen)",
	"Eggs (Half Dozen)",
	"Milk (1/2 Gal)",
	"Yogurt",
	"Coffee Creamer",
	"Parmigiano Reggiano",
	"Shredded Cheese",
	"Mozzarella (Whole)",
	"Mozzarella (Shredded)",
	"Oat Milk",
	"Cream Cheese",
];

export const frozen = ["Frozen Corn", "Ice Cream"];

export const other = ["Hand Soap", "Dish Sponge"];
