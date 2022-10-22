// The middleware in node. js is a function that will have all the access for 
// requesting an object, responding to an object, and moving to the next middleware 
// function in the application request-response cycle.
// application level middleware

const express= require('express');
const reqFilter= require('./middleware')
const app= express();
const route = express.Router();

route.use(reqFilter);

app.get('/',(req,resp)=>{
    resp.send('Welcome to the home page')
})
route.get('/users', (req,resp)=>{
    resp.send('Welcome to the Users page')
})
app.get('/about',(req,resp)=>{
    resp.send('Welcome to the About page')
})
app.use('./',route);
app.listen(5000);