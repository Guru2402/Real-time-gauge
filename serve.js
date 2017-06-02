var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get("/raphael-2.1.4.min.js",(req,res)=>{
    res.sendFile(__dirname + "/raphael-2.1.4.min.js")
})
app.get("/justgage.js",(req,res)=>{
    res.sendFile(__dirname + "/justgage.js")
})

app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/gauge.html' )
})

io.on('connection', function(socket){
  socket.on('value', function(amount){
    io.emit('value', amount);
  });
});

http.listen(8081);