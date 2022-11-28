require('dotenv').config()
const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
require("./db/conn");
const Register = require("./models/registers");
const userRegistration = require("../api/Userregister");
const userLogin = require("../api/userlogin");
const productsController = require('../api/controller/route');

const port = process.env.PORT || 3000;
const static_path = path.join(__dirname, "../templates/views");
const template_path = path.join(__dirname, "../templates/partials");
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(static_path));
app.set('view engine', 'hbs');
app.set('views', static_path);
hbs.registerPartials(template_path);

// console.log(process.env.SECRET_KEY)
app.get("/", productsController.getroute);
app.get("/register", productsController.getregister);
//create a new user in database
app.post("/register", userRegistration);
app.get("/login", productsController.getlogin);
app.post("/login", userLogin);

app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
});
