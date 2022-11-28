const express = require('express');
require('./config');
const Product = require('./product');
const port = process.env.PORT || 5000;
const productController= require('./controller/route');

const app = express();
app.use(express.json());
app.post("/create", productController.getpost);

app.get("/list",productController.getlist);
app.get("/aggrigatemethod",productController.getaggrigate);
app.delete("/delete/:_id",productController.getdelete)
app.put("/update/:_id",productController.getput)

app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
});
