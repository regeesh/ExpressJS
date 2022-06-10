const express = require('express')
const app = express();



app.listen("8000", ()=>{
  console.log("PORT is running on 8000");
})

app.get("/Login", (req, res)=>{
  if(req.query.username== "Regeesh" && req.query.password == "regeesh123"){
    var json ={"name" : "Regeesh", "mobile" : "123456789"}; 
    res.json({"status": true, "message": "Login Succesful", result: json});
  }else{
    res.send("Invalid Credentials");
  }
})