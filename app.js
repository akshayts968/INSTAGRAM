const express = require("express");
const app = express();
const mongoose = require("mongoose");

const http = require("http");
const session = require("express-session");
const path = require("path");
const MONGO_URL = "mongodb://127.0.0.1:27017/instagram";
const ejsMate = require("ejs-mate");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
const sessionOptions = {
    secret: "mysupersecretcode",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        htttpOnly: true,
    },
};
app.use(session(sessionOptions));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine('ejs', ejsMate);
app.use(express.urlencoded({ extended: true }));
//app.use(methodOverride("_method"));

app.use(express.static(path.join(__dirname, "/public")));

main().then(() => {
    console.log("conntected to DB");
})
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
};
app.get("/",(req,res)=>{
    //res.render("sidenavbar.ejs");
    res.render("profile.ejs");
});
app.get("/home",(req,res)=>{
    res.render("sidenavbar.ejs");
    //res.render("profile.ejs");
});
app.get("/explore",(req,res)=>{
    res.render("explore.ejs");
    //res.render("profile.ejs");
});
app.listen(8080, () => {
    console.log("server is listening to port 8080");
});