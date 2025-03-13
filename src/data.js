import { nanoid } from "nanoid";

export const weeklyItems = {
	produce: [
		{ id: nanoid(), name: "Avocados", quantity: 4, purchased: false },
		{ id: nanoid(), name: "Apples", quantity: 4, purchased: false },
	],
	bakery: [
		{ id: nanoid(), name: "Sandwich Bread", quantity: 1, purchased: false },
	],
	dryGoods: [],
	protein: [
		{ id: nanoid(), name: "Ground turkey", quantity: 1, purchased: false },
	],
	dairy: [{ id: nanoid, name: "Yogurt", quantity: 6, purchased: false }],
	frozen: [],
	other: [],
};

export const produce = [
	"Apples",
	"Avocados",
	"Bananas",
	"Green Onions",
];

export const bakery = [
	"Bagels",
	"Sandwich Bread",
	"Artisanal Bread",
	"Tortillas (Large)",
	"Tortillas (Small)",
];

export const dryGoods = [
	"Black Beans",
	"White Rice",
	"Chocolate Bar",
	"Pretzels / Snack",
	"Basmati Rice",
	"Kidney Beans",
	"Brown Rice",
];

export const protein = [
	"Ground Chicken",
	"Ground Turkey",
	"Chicken Breast",
	"Chicken Thighs",
	"Shaved Beef",
	"Chicken Sausage (Italian)",
	"Chicken Sausage (Spicy)",
	"Turkey Bacon",
];

export const dairy = [
	"Almond Milk",
	"Eggs (Dozen)",
	"Eggs (Half Dozen)",
	"Milk (1/2 Gal)",
	"Yogurt",
	"Coffee Creamer",
	"Parmigiano Reggiano",
	"Sharp Cheddar (Block)",
	"Sharp Cheddar (Shredded)",
	"Mexican Cheese Blend",
	"Colby Jack (Block)",
	"Mozzarella (Whole)",
	"Mozzarella (Shredded)",
	"Oat Milk",
	"Cream Cheese",
];

const allFrozen = [
	"Pizza",
	"Corn",
	"Broccoli",
	"Green Beans",
	"Carrots",
	"Smoothie Fruit",
	"Ice Cream",
];

export const frozen = allFrozen.sort();

export const other = ["Hand Soap", "Dish Soap", "Dish Sponge"];

// Meals, unsorted:
const allMeals = [ "Baked Tacos", "Lemon Chicken Scallopini", "Bulgogi", "Okinawan Taco Rice", "Gyudon" ]

// Sorted meals for export:
export const meals = allMeals.sort();
console.log(meals);