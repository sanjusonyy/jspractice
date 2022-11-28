const Register = require("../src/models/registers");
var jwt = require('jsonwebtoken');

const userRegistration = async (req, res) => {
    try {
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;
        if(password === cpassword){
const registerEmployee = new Register({
    firstname : req.body.firstname,
    email : req.body.email,
    lastname : req.body.lastname,
    phone : req.body.phone,
    password : password,
    age : req.body.age, 
    confirmpassword : cpassword,
    gender : req.body.gender,

});

const token = await registerEmployee.generateAuthToken();
console.log("the token part" + token);
const registered = await registerEmployee.save();
res.status(201).render("index");

        }else{
            res.send("password are not matching")
        }
    

        // console.log(req.body.firstname)
        // res.send(req.body.firstname)


    } catch (error) {
        res.status(400).send(error);
    }


}
module.exports = userRegistration;