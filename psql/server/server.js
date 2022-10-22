require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("tiny"));
//get all restaurants
app.get("/restaurants",(req,resp)=>{
    console.log("route handler run");
    resp.json({
        status: "sucess",
        data: {
            restaurant: ["macdonalds","wendys"],
        },
    });

});
//get a restaurant
app.get("/api/v1/restaurants/:restaurantid",(req,resp)=>{
    console.log(req.params);
});

//Create a restaurant
app.post("/api/v1/restaurants",(req,resp)=>{
console.log(req);
});

const port = process.env.PORT || 3001;
app.listen(port,()=>{
    console.log(`server is up and listening on port ${port}`);
});
