const Register = require("../src/models/registers");
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');


const userLogin = async(req, res) => {
    try{
const email = req.body.email;
const password = req.body.password;

const useremail = await Register.findOne({email});

const isMatch = await bcrypt.compare(password, useremail.password);

const token = await useremail.generateAuthToken();
console.log("the token part" + token);

if(isMatch){
    res.status(201).render("index");
}else{
    res.send("invalid login details");
}

    }catch(error){
        res.send(400).send(error);
    }
}
module.exports = userLogin;