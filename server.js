const express=require('express');
const app=express();

app.get('/',function(req,res){
    res.sendFile('/index.html');
});

app.listen(4000,function(){
    console.log("server is running on port 4000")
});
