const express=require('express')
const path=require('path');
const app=express();  //we take the express function from the express module like there are more function in this module
const publicPath=path.join(__dirname,'public')

// console.log(publicPath);
// app.use(express.static(publicPath)); //we will not use this if we want to remove the extension from the url like .html
//so for that we the previous approach as app.get("",(req,resp){}) in use sendfile in place of send
app.set("view engine","ejs");

app.get("",(_,resp)=>{
  resp.sendFile(`${publicPath}/index.html`)
})
app.get("/profile",(_,resp)=>{
    const user={
        name:'Gaurav',
        email:'gaurav@123.com',
        city:'mathura'
    }
  resp.render("profile",{user})
})

app.get("/about",(_,resp)=>{
  resp.sendFile(`${publicPath}/about.html`)
})
app.get("*",(_,resp)=>{
  resp.sendFile(`${publicPath}/notFound.html`)
})

app.listen(5000);
