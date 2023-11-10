const express=require('express')
const multer=require('multer')

const app=express();

const upload=multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,"uploads")
        },
        filename:function (req, file,cb){
            cb(null,file.fieldname + "-"+ Date.now()+ ".png")
        }

    })
}).single("user_file")

app.post("/upload",upload ,(req,resp)=>{
    
});

app.listen(1000);



























// require('./config')
// const Product=require('./product')

// const app=express();
// app.use(express.json())

// //search Api with multiple field

// app.get("/search/:key",async (req,resp)=>{
//     // resp.send("hello")
//     let data = await Product.find(
//         {
//             "$or":[
//                 {"mobile":{$regex:req.params.key}},  
//                 {"brand":{$regex:req.params.key}}
//             ]
//         }
//     )
//     resp.send(data);
// })




















// app.post('/create',async (req,resp)=>{
//     let data=new Product(req.body);
//     let result =await data.save();
//     console.log(req.body)
//     resp.send("done")
// })

// app.get('/list',async(req,resp)=>{
//     let data=await Product.find();
//     resp.send(data);
// })
// app.delete('/delete/:_id',async(req,resp)=>{
//     console.log(req.params)
//     let data=await Product.deleteOne(req.params);
//     resp.send(data);
// })

// app.put('/update/:_id',async(req,resp)=>{
//     console.log(req.params)
//     let data=await Product.updateOne(
//         req.params,
//         {$set:req.body}
//     );
//     resp.send(data);
// })

app.listen(5000)