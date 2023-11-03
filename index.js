const mongoose=require('mongoose')

 mongoose.connect("mongodb://127.0.0.1:27017/e-comm");
//Now we schema means the fields and the type of field
const ProductSchema=new mongoose.Schema({
    Mobile:String,
    price:Number,
    brand:String,
});
const SaveInDB=async()=>{
    //Model is used to connect nodejs with mongodb
    const Product =mongoose.model('products',ProductSchema);
    let data=new Product({
        mobile:"mi A6+",
        price:22442,
        brand:"Xiaomi"
    })
    let result=await data.save();
    console.log(result);
}

const UpdateInDB=async()=>{
    const Product =mongoose.model('products',ProductSchema);
    let data=await Product.updateOne(
        {price:1000},
        {
            $set:{Mobile:'iphone 2'}
        }
        )
        console.log(data)
}
const DeleteInDB=async()=>{
    const Product =mongoose.model('products',ProductSchema);
    let data=await Product.deleteOne({price:1000})
        console.log(data)
}
const FindInDB=async()=>{
    const Product =mongoose.model('products',ProductSchema);
    let data=await Product.find({mobile:'One plus 710'})
        console.log(data)
}

// SaveInDB();
// UpdateInDB();
// DeleteInDB()
FindInDB()