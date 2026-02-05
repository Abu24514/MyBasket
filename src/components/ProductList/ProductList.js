import Butter from "../../assets/butter.webp";
import Strawberry from "../../assets/strawberry.webp";
import Eggs from "../../assets/eggs.webp";
import Cabbage from "../../assets/cabbage.webp";
import Eggplant from "../../assets/eggplant.webp";
import Shrimp from "../../assets/shrimp.webp";
import Kiwi from "../../assets/kiwi.webp";
import Capsicum from "../../assets/capsicum.webp";
import Broccoli from "../../assets/broccoli.webp";
import Yogurt from "../../assets/yogurt.webp";
import Beef from "../../assets/beef.webp";
import ChickenBreast from "../../assets/chicken-breast.webp";
import Kale from "../../assets/kale.webp";
import Cheese from "../../assets/cheese.webp";
import CondensedMilk from "../../assets/condensed-milk.webp";
import Salmon from "../../assets/salmon.webp";
import Banana from "../../assets/banana.webp";
import Milk from "../../assets/milk.webp";
import Pineapple from "../../assets/pineapple.webp";
import Tofu from "../../assets/tofu.webp";
import Tilapia from "../../assets/tilapia.webp";
import SliceCheese from "../../assets/slice-cheese.webp";
import RicottaCheese from "../../assets/ricotta-cheese.webp";
import Grapes from "../../assets/grapes.webp";
import Watermelon from "../../assets/Watermelon.webp";
import Pomogranate from "../../assets/Pomogranate.webp";
import Lettuce from "../../assets/lettuce.webp";
import Tomato from "../../assets/Tomato.webp";
import Lime from "../../assets/Lime.webp";
import Greenchilli from "../../assets/green-chilli.webp";

const products = [
  {
    id: 1,
    name: "Strawberry",
    price: 3.0,
    perOff: 2,
    color: "#FFD8D3",
    category: "Fruits",
    image: Strawberry,
  },
  {
    id: 2,
    name: "Butter",
    price: 3.5,
    perOff: 15,
    color: "#FBDDB8",
    category: "Dairy",
    image: Butter,
  },
  {
    id: 3,
    name: "Eggs",
    price: 2.05,
    perOff: 18,
    color: "#E5AB8B",
    category: "Dairy",
    image: Eggs,
  },

  {
    id: 4,
    name: "Cabbage",
    price: 3.0,
    perOff: 10,
    color: "#E6F4EA",
    category: "Vegetables",
    image: Cabbage,
  },
  {
    id: 5,
    name: "Eggplant",
    price: 4.0,
    perOff: 12,
    color: "#EFE4FF",
    category: "Vegetables",
    image: Eggplant,
  },
  {
    id: 6,
    name: "Shrimp",
    price: 3.5,
    perOff: 8,
    color: "#FFE8E0",
    category: "SeaFood",
    image: Shrimp,
  },
  {
    id: 7,
    name: "Kiwi",
    price: 2.05,
    perOff: 5,
    color: "#E7F8D5",
    category: "Fruits",
    image: Kiwi,
  },
  {
    id: 8,
    name: "Green Capsicum",
    price: 4.0,
    perOff: 10,
    color: "#E3F5E1",
    category: "Vegetables",
    image: Capsicum,
  },
  {
    id: 9,
    name: "Broccoli",
    price: 2.0,
    perOff: 7,
    color: "#DFF5EA",
    category: "Vegetables",
    image: Broccoli,
  },
  {
    id: 10,
    name: "Yogurt",
    price: 3.0,
    perOff: 15,
    color: "#E8E6DC",
    category: "Dairy",
    image: Yogurt,
  },
  {
    id: 11,
    name: "Beef",
    price: 8.0,
    perOff: 6,
    color: "#FFE0E0",
    category: "Meat",
    image: Beef,
  },
  {
    id: 12,
    name: "Chicken Breast",
    price: 7.0,
    perOff: 10,
    color: "#FFF1E6",
    category: "Meat",
    image: ChickenBreast,
  },
  {
    id: 13,
    name: "Kale Leaves",
    price: 3.0,
    perOff: 9,
    color: "#E5F6EC",
    category: "Vegetables",
    image: Kale,
  },
  {
    id: 14,
    name: "Mozzarella Cheese",
    price: 7.0,
    perOff: 20,
    color: "#FFF7D6",
    category: "Dairy",
    image: Cheese,
  },
  {
    id: 15,
    name: "Condensed Milk",
    price: 5.0,
    perOff: 12,
    color: "#FFF3CC",
    category: "Dairy",
    image: CondensedMilk,
  },
  {
    id: 16,
    name: "Salmon Filet",
    price: 4.0,
    perOff: 8,
    color: "#FFE5E5",
    category: "SeaFood",
    image: Salmon,
  },
  {
    id: 17,
    name: "Banana",
    price: 2.0,
    perOff: 5,
    color: "#FFF4B8",
    category: "Fruits",
    image: Banana,
  },
  {
    id: 18,
    name: "Milk Bottle (3)",
    price: 8.0,
    perOff: 18,
    color: "#E8E6DC",
    category: "Dairy",
    image: Milk,
  },
  {
    id: 19,
    name: "PineApple",
    price: 5.0,
    perOff: 7,
    color: "#FFF0CC",
    category: "Fruits",
    image: Pineapple,
  },
  {
    id: 20,
    name: "Tofu Cubes",
    price: 4.0,
    perOff: 10,
    color: "#E8E6DC",
    category: "Dairy",
    image: Tofu,
  },
  {
    id: 21,
    name: "Tilapia Fish",
    price: 3.0,
    perOff: 6,
    color: "#E8E6DC",
    category: "SeaFood",
    image: Tilapia,
  },
  {
    id: 22,
    name: "Slice Cheese",
    price: 5.0,
    perOff: 15,
    color: "#FFF6D8",
    category: "Dairy",
    image: SliceCheese,
  },
  {
    id: 23,
    name: "Ricotta Cheese",
    price: 7.0,
    perOff: 18,
    color: "#FFF2E5",
    category: "Dairy",
    image: RicottaCheese,
  },
  {
    id: 24,
    name: "Grapes",
    price: 3.0,
    perOff: 5,
    color: "#F1E6FF",
    category: "Fruits",
    image: Grapes,
  },
  {
    id: 25,
    name: "Lettuce Leaf",
    price: 3.0,
    perOff: 8,
    color: "#E8F7E8",
    category: "Vegetables",
    image: Lettuce,
  },
  {
    id: 26,
    name: "Tomato",
    price: 5.0,
    perOff: 4,
    color: "#FFE0E0",
    category: "Vegetables",
    image: Tomato,
  },
  {
    id: 27,
    name: "Lime",
    price: 2.0,
    perOff: 4,
    color: "#A0D544",
    category: "Vegetables",
    image: Lime,
  },
  {
    id: 28,
    name: "Watermelon",
    price: 12.0,
    perOff: 4,
    color: "#E8F7E8",
    category: "Fruits",
    image: Watermelon,
  },
  {
    id: 29,
    name: "Pomogranate",
    price: 22.0,
    perOff: 3,
    color: "#FFE0E0",
    category: "Fruits",
    image: Pomogranate,
  },
  {
    id: 30,
    name: "Green chilli",
    price: 1.5,
    perOff: 2,
    color: "#E8F7E8",
    category: "Vegetables",
    image: Greenchilli,
  },
];

export default products;
