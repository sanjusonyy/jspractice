const Product = require('../product');

exports.getpost= async (req, resp) => {
    let data = new Product(req.body);
    let result = await data.save();
    console.log(result)
    resp.send(result);
}
exports.getlist=async (req,resp)=>{    //Get Method
    let data = await Product.find();
    resp.send(data);
}
exports.getdelete=async (req,resp)=>{    //delete method
    console.log(req.params);
    let data = await Product.deleteOne(req.params);
    resp.send(data);
}
exports.getput=async (req,resp)=>{    //Update method
    console.log(req.params);
    let data = await Product.updateOne(
       req.params,             //condition
        {$set:req.body }        //$set update data
        
        );
    resp.send(data);
}
exports.getaggrigate= async (req,resp)=>{    
    try{
const addfield = await Product.aggregate([
{$addFields: {"Sohan.salary": "2Lakh"}},

]);
res.status(200).json({
    status: "sucess",
    data: {addfield,
    }
});

    }catch(error){
        resp.status(404).json({
            status: "fail",
            message: error,
        });
    }
};