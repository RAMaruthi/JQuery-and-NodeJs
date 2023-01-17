module.exports.smipleFuc= function(){
    console.log("simple fuction  is called in this manner")
}



module.exports.tables=function(num){
    console.log("the table of tghis number is ")
    for(let i=1;i<=10;i++)
    console.table(`${num} X ${i} = ${num*i}` )

}