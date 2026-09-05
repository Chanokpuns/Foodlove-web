const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.urlencoded({ extended: true }));
const bcrypt = require("bcrypt");
const mysql = require("mysql2");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home");
});


app.post("/register", async (req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password, 10);

    db.query(
        "INSERT INTO users (username, password) VALUES (?, ?)",
        [username, hashedPassword],
        (err, result) => {
            if (err) {
                return res.send("สมัครสมาชิกไม่สำเร็จ");
            }
            res.redirect("/login");
        }
    );
});



app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.get("/menu", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    res.render("menu");
});

app.get("/submit", (req, res) => {
    res.render("menu");
});

app.get("/pizza", (req, res) => {
    res.render("pizza");
});

app.get("/hamburger", (req, res) => {
    res.render("hamburger");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});