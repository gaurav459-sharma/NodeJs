const mongoose=require('mongoose')
const ProductSchema=new mongoose.Schema({
    mobile:String,
    price:Number,
    brand:String,
});

module.exports=mongoose.model('products',ProductSchema)