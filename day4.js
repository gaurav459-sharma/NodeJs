const express=require('express');
const app=express();

// get ,put,post,delete etc each method or api take request and response 
// client or borowser request from the server and server response to these browser request
                    //   request
                // <-----------------------
        //   server                        client
                // ------------------------>
                    // Response
app.get('',(req,resp)=>{
    // console.log("my name is: ",req.query.name)
    resp.send(`
     <input type="text" placeholder="enter your name" value="${req.query.name==undefined?"enter your name":req.query.name}"/>
     <button>submit</button>
     <a href="/about">Got to about page</a>
    `)
})
app.get('/about',(req,resp)=>{
    resp.send(`
    <h1>Hello this is about page</h1>
    <a href="/">Got to Home page</a>
    `)
})
app.get('/help',(req,resp)=>{
    resp.send(
      [ {
        name:"Dev",
        age:23
       },
       {
        name:"prgram",
        age:14
       }]

    )
})

app.listen(3200);