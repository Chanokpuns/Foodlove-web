const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/menu", (req, res) => {
    res.render("menu");
});

app.get("/submit", (req, res) => {
    res.render("menu");
});

app.get("/pizza", (req, res) => {
    res.render("pizza", { pizzas });
});

const pizzas = [
    {
        id: "pepperoni",
        name: "Pepperoni Pizza",
        price: 290,
        image: "/img/pepperoni.jpg"
    },
    {
        id: "hawaiian",
        name: "Hawaiian Pizza",
        price: 290,
        image: "/img/hawaiian.jpg"
    },
    {
        id: "veggie",
        name: "Vegetarian Pizza",
        price: 240,
        image: "/img/veggie.jpg"
    },
    {
        id: "margherita",
        name: "Margherita Pizza",
        price: 300,
        image: "/img/Margherita.jpg"
    },
    {
        id: "smokesalmon",
        name: "Smoked Salmon Pizza",
        price: 290,
        image: "/img/smokesalmon.jpg"
    },
    {
        id: "cheese",
        name: "Cheese Pizza",
        price: 290,
        image: "/img/cheese.jpg"
    }
];

app.get("/hamburger", (req, res) => {
    res.render("hamburger", { hamburger });
});

const hamburger = [
    {
        id: "fish",
        name: "Fish burger",
        price: 70,
        image: "/img/fish.jpg"
    },
    {
        id: "pork",
        name: "Pork burger",
        price: 60,
        image: "/img/pork.jpg"
    },
    {
        id: "meat",
        name: "Meat burger",
        price: 90,
        image: "/img/meat.jpg"
    }
];

app.get("/chicken", (req, res) => {
    res.render("chicken", { chickens});
});

const chickens = [
    {
        id: "chicken1",
        name: "Classic fried chicken",
        price: 150,
        image: "/img/classic-chicken.jpg"
    },
    {
        id: "chicken2",
        name: "Buttermilk fried chicken",
        price: 170,
        image: "/img/buttermilk-chicken.jpg"
    },
    {
        id: "chicken3",
        name: "Korean fried chicken",
        price: 170,
        image: "/img/korean-chicken.jpg"
    },
        {
        id: "chicken4",
        name: "Spicy fried chicken",
        price: 170,
        image: "/img/spicy-chicken.jpg"
    },
        {
        id: "chicken5",
        name: "Honey fried chicken",
        price: 150,
        image: "/img/honey-chicken.jpg"
    }
];

app.get("/drink", (req, res) => {
    res.render("drink", { drinks});
});

const drinks = [
    {
        id: "drink1",
        name: "Coca-cola",
        price: 35,
        image: "/img/coke.jpg"
    },
        {
        id: "drink2",
        name: "Orange",
        price: 45,
        image: "/img/orange-juice.jpg"
    },
        {
        id: "drink3",
        name: "Boba-tea",
        price: 39,
        image: "/img/boba-tea.jpg"
    },
        {
        id: "drink4",
        name: "water",
        price: 10,
        image: "/img/water.jpg"
    },
        {
        id: "drink5",
        name: "Sprite",
        price: 20,
        image: "/img/sprite.jpg"
    },
        {
        id: "drink6",
        name: "Coconut",
        price: 35,
        image: "/img/coconut.jpg"
    }
];

app.get("/cart", (req, res) => {
    res.render("cart");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});