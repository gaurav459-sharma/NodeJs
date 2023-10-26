const dbConnect=require('./mongoConnect')

const deleteData=async ()=>{
const db=await dbConnect();
let result=await db.deleteMany({name:"one plus"})

console.warn(result);

}

deleteData()
