const mongoose=require('mongoose')

const main=async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/e-comm");

    //Now we schema means the fields and the type of field
    const ProductSchema=new mongoose.Schema({
        name:String,
        price:Number
    });
    //Model is used to connect nodejs with mongodb
    const ProductModel =mongoose.model('products',ProductSchema);
    let data=new ProductModel({name:"mi A2",price:222})
    let result=await data.save();
    console.log(result);
}

main();