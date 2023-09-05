const express = require('express')
const app = express();
const path = require('path')

app.set("view engine", "ejs")

// const publicPath=path.join(__dirname,'public');

// app.get("",(_,resp)=>{
//     resp.sendFile(`${publicPath}/index.html`)
//   })

// app.get("/profile",(_,resp)=>{
//     const user={
//         name:'Gaurav',
//         email:'gaurav@123.com',
//         city:'mathura',
//         skills:['C++','reacts','sql','Node.js']
//     }
//   resp.render("profile",{user})
// })
// app.get('/login',(_,resp)=>{
//     resp.render('login')
// })
// .........................................................................................................................................
// middleware
// middleware is set of functions which can use only with the routes and with the help of middleware ae can authenticate users and also restrict the website in some country or with some age with the help of middleware 
const reqfilter=require('./middleware')
const route=express.Router();
// app.use(reqfilter)  //with help of use function we can use the middleware simple and it is application level middleware means applied to all the routes that is globally

route.use(reqfilter) //we apply route level middle on a single or group of route

app.get("", (req, resp) => {
    resp.send("Welcome to HomePage");
})
app.get("/users",reqfilter, (req, resp) => { //writing reqfilter evertime is not goot practice so for that we import a route from express module and use them
    resp.send("Welcome to UsersPage");
})
route.get("/contact", (req, resp) => {
    resp.send("Welcome to contact page");
})
route.get("/about", (req, resp) => {
    resp.send("Welcome to about page");
})

//and add one extra line to use this
app.use('/',route)


app.listen(5000)