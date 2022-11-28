require('dotenv').config()
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');


const employeeSchema = new mongoose.Schema({
firstname : {
    type:String,
    required:true
},
email : {
    type:String,
    required:true,
    unique:true
},
lastname : {
    type:String,
    required:true
},
phone : {
    type:Number,
    required:true,
    unique:true
},
password : {
    type:String,
    required:true
},
age : {
    type:Number,
    required:true
},

confirmpassword : {
    type:String,
    required:true
},
gender : {
    type:String,
    required:true,
},
tokens:[{
    token:{
        type:String,
    required:true
    }
}]

});
//.method is instance method
employeeSchema.methods.generateAuthToken = async function(){
try{
    // console.log(this._id);
    let secretkey = 'sanjeevskumarthenshehrfkdkdkdkdk';
const token = jwt.sign({_id:this._id.toString()}, secretkey);
this.tokens = this.tokens.concat({token});
await this.save();
return token;

}catch(error){
console.log("the error part" + error);
req.send("the error part" + error);
// console.log("the error part" + error);
}
}
//converting pasword into hash
employeeSchema.pre("save", async function(next){
    if(this.isModified("password")){
        // const passwordHash = await bcrypt.hash(password, 10);
        // console.log(`the current password is ${this.password}`);
        this.password = await bcrypt.hash(this.password, 10);
        this.confirmpassword = await bcrypt.hash(this.password, 10);

        // console.log(`the current password is ${this.password}`);
        // this.password = await bcrypt.hash(this.password, 10);

    }
    
    next();
});

// creating a collection
const Register = new mongoose.model("Register",employeeSchema);
module.exports = Register;