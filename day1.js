//Day1
const http =require("http");
const data=require('./data')
http.createServer((req,resp)=>{
  resp.writeHead(404,{'Content-Type':'application\json'});
  resp.write(JSON.stringify(data))
  resp.end();
}).listen(4000)