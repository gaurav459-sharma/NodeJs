const dbConnect=require('./mongoConnect')

const insert=async()=>{
    let db= await dbConnect()
    const result=await db.insertOne(
        {name:"one plus",brand:"one+", price:35000}
    );

    // if(result.acknowledged){
    //     console.log("data inserted")
    // }
    
}

insert();