const Register = require('../../src/models/registers');

exports.getroute= (req, res) => {
    res.render("index");
}
//
exports.getregister= (req, res) => {
    res.render("register");
}

exports.getlogin= (req, res) => {
    res.render("login");
}

// exports.gett= () => {
//     console.log(`server is running at port no ${port}`);
// }A