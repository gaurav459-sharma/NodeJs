const dbConnect=require('./mongoConnect')

const update=async ()=>{
    const db= await dbConnect();
    
    const res=await db.updateMany({name:'one plus'},
    {$set:{price:45000}
})
console.log(res)
}

update(); 