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
	"White Onions",
	"Yellow Onions",
	"Red Onions",
	"Carrots",
	"Parsely",
	"Pears (Anjou)",
	"Pears (Asian)",
	"Jalapenos",
	"Chilis",
	"Bell Peppers",
	"Mangos",
	"Cabbage",
	"Salad Mix",
	"Kale (Bunch)",
	"Kale (Package)",
	"Spinach",
	"Lettuce",
	"Lemons",
	"Limes",
	"White Potatoes",
	"Red Potatoes",
	"Cilantro",
	"Leeks",
	"Cherry Tomatoes",
].sort();

export const bakery = [
	"Bagels",
	"Sandwich Bread",
	"Artisanal Bread",
	"Tortillas (Large)",
	"Tortillas (Small)",
	"Sourdough Bread",
	"Naan",
].sort();

export const dryGoods = [
	"Black Beans",
	"White Rice",
	"Chocolate Bar",
	"Pretzels / Snack",
	"Basmati Rice",
	"Kidney Beans",
	"Brown Rice",
	"Cannellini Beans",
	"Everything Bagel Seasoning",
	"Salt",
	"Flour",
	"Taco Seasoning",
	"Salsa",
	"Salsa Verde",
	"Tortilla Chips",
	"Hot Sauce",
	"Granola Bars",
	"Chocolate",
	"Chocolate Chips",
	"Pistachioes",
	"Almonds",
	"Dried Cranberries",
	"Almond Butter",
	"Tomato Paste",
].sort();

export const protein = [
	"Ground Chicken",
	"Ground Turkey",
	"Chicken Breast",
	"Chicken Thighs",
	"Shaved Beef",
	"Chicken Sausage (Italian)",
	"Chicken Sausage (Spicy)",
	"Turkey Bacon",
	"Ground Pork",
	"Ground Beef",
	"Pork Cutlets",
].sort();

export const dairy = [
	"Almond Milk",
	"Eggs (Dozen)",
	"Eggs (Half Dozen)",
	"Milk (1/2 Gal)",
	"Greek Yogurt",
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
].sort();

export const frozen = [
	"Pizza",
	"Corn",
	"Broccoli",
	"Green Beans",
	"Carrots",
	"Smoothie Fruit",
	"Ice Cream",
].sort();

export const other = [
	"Hand Soap",
	"Dish Soap",
	"Dish Sponge",
	"Clorox Wipes",
	"Swiffer Refills",
	"Pledge",
	"Toothpaste",
	"Tooth Brush",
	"Floss",
].sort();

// Meals
export const mealIdeas = [
	"Baked Tacos",
	"Lemon Chicken Scallopini",
	"Bulgogi",
	"Okinawan Taco Rice",
	"Gyudon",
	"Baked Chicken Katsu",
	"Vodka Sauce Pasta Bake",
	"Steak Street Tacos",
	"Lettuce Wraps",
	"Chicken Pot Pie",
	"Ginger Chicken Udon",
	"Black Bean Burgers",
	"Chicken Ramen",
	"Cacio e Pepe",
].sort();
