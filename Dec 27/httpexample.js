const h = require("http");

h.createServer(function(req,res){
    console.log(req.url);
    res.write("Anjaneye cotton mill Davanger");
    res.end();
}).listen(12345);