// how to create update rename and read the data of a file

const { promises } = require('dns');
const fs=require('fs');
const path=require('path');

const dir_path=path.join(__dirname,'files')
const file_path=`${dir_path}/temp.txt`

//create file
// fs.writeFileSync(file_path,'this is the tempp file')

//read file
// fs.readFile(file_path,'utf8',(error,item)=>{
//     console.log(item);
// })

//upadate the file 
// fs.appendFile(file_path,' and the file name is tmp.txt',(err)=>{
//     if(!err){
//         console.log("this file is appended");
//     }
// })

// rename the file name
// fs.rename(file_path,`${dir_path}/new_temp.txt`,(err)=>{
// if(!err){
//     console.log('the file is renamed')
// }

// })

//delete a file
// fs.unlinkSync(`${dir_path}/new_temp.txt`)

//what is buffer?
// buffer is basicaly the memory required to run a file means nodejs required some memory to execute a file and this memory called a buffer

// synchronous -> synchronous are those language which have to wait for the execution of another process to complete ex- php
// asynchronous-> In asynchronous the process happened parallel and does not wait like if any process take more time then another process start executing the does not wait for the process and complete when it finished ex- javascipt,node.js

// console.log("executing1")
// setTimeout(()=>{
//     console.log("executing2")
// },2000)

// console.log("executing3")
// let a=10,b=5


// let waitingdata=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         // b=20;
//         resolve(20);
//     }, 2000);
// })
// waitingdata.then((data)=>{
//     b=data;
//     console.log(a+b);
// })


//     let first_promise = new Promise((resolve, reject) => resolve("Hello"));

//     let second_promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(" GeeksforGeeks..");
//         }, 2000);
//     });
    
//   const display=async()=>{
//     let alldata=await Promise.all([first_promise,second_promise]);
//     console.log(alldata)
//    }
//  display()


//how node js works
// when any process execute it makes callstack--------->node api
//                                          |               |
//                                          |               |
//                                          |               |
//                                          |               |                                                        
//                                         callback      queue         
console.log('executing 1') 

setTimeout(() => {
    console.log('executing 2')
}, 2000);

setTimeout(()=>{
    console.log('executing 3')  //this is executing after priting executing 4 becuase it will send into node api and after node api and in node api it select the minimum time process and then send into the callback queue now,and waiting for the empty callstack and if it become empty the this process execute .
},0)

console.log('executing 4')