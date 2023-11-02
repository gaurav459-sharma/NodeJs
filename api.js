const express =require('express')
const mongodb=require('mongodb')
const dbConnect=require('./MongoConnect')

const app=express();
app.use(express.json());

app.get('/',async(req,resp)=>{
    let data=await dbConnect();
    data=await data.find().toArray();
    // console.log(data)
    resp.send(data)
})

app.post('/',async(req,resp)=>{
   let data=await dbConnect();
   let result=await data.insertOne(req.body)
    resp.send(result)
})

app.put('/:mobile',async(req,resp)=>{
    // console.log(req.body)
    let data=await dbConnect();
    let result=await data.updateOne({mobile:req.params.mobile},{$set:req.body})
    resp.send({result:"updated"})
})

app.delete('/:id',async(req,resp)=>{
    console.log(req.params.id)
    let data=await dbConnect();
    let result=await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)});
    resp.send(result);
})

app.listen(5500)