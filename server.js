const http=require("http")
http.createServer(function (request,response) {
    response.writeHead(200,{'Content-Type':"text/plain"})})
    response.end("<h1>hello Node !!!!!</h1>/n")
    .listen(5000);
    console.log("server is runing ")