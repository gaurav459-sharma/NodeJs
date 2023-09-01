//Day2

const { error } = require('console');
const fs=require('fs');
// const input=process.argv;

// if(input[2]=='add'){
//   fs.writeFileSync(input[3],input[4])
// }
// else if(input[2]=="remove"){
//   fs.unlinkSync(input[3]);
// }
// else{
//   console.log("invalid input")
// }
const path=require('path');
const dirPath=path.join(__dirname,'files');
for(let i=0;i<5;i++){
    fs.unlinkSync(dirPath+"/prog"+i+".txt",'this is program file')
}
fs.readdir(dirPath,(error,file)=>{
    // console.log(file)
    file.forEach((item)=>{
        console.log(item)
    })
})
// console.log(dirPath)