const fs=require("fs");

 const file="./consumemodule.js";

const f=fs.readFileSync(file,"utf8");

 console.log(f);

fs.readFile(file,"utf8",function(err,data){
    if(err)
    console.error(err)
    else
    console.log(data);
})
console.log("the statement will be come frist before the fuction")

function appendFile(){
    fs.appendFileSync("textfile.txt","\nAppu Boss\n","utf8")
}
appendFile();