
const express = require('express')
const app = express();
const cors = require('cors')
app.use(cors()); 


app.use(express.urlencoded({ extended: false }))
app.use(express.json())

var dbConnector = require("./config/db");

dbConnector.connectToDB(() => {
  app.listen("8000", () => {
    console.log("PORT is running on 8000");
  })
})

var secret = "841235432344ADRA";
let crypto = require('crypto-js');

var decrypter = require("./decrypt");
const { response } = require('express');


// app.listen("8000", ()=>{
//   console.log("PORT is running on 8000");
// })

// app.get("/Login", (req, res)=>{
//   if(req.query.username== "Regeesh" && req.query.password == "regeesh123"){
//     var json ={"name" : "Regeesh", "mobile" : "123456789"}; 
//     res.json({"status": true, "message": "Login Succesful", result: json});
//   }else{
//     res.send("Invalid Credentials");
//   }
// })


app.post("/Login", (req, res) => {
  // const username = req.params.username;
  // const password = req.params.password;


  // var query  = "SELECT * FROM TbUser WHERE EmailId='' AND Password =''";

  // dbConnector.perfromDBOperation(query, (err, result) => {
  //   if (err) {
  //     console.log(err);
  //     res.json({ status: false, message: "Invalid Credentials" })
  //   } else {
  //     console.log(result);
  //     res.json({ status: true, message: "User logged in successfully" })
  //   }
  // })

  var query = "INSERT INTO Testtbl(BeneficiaryName, Beneficaiary_New,CreatedDate) VALUES ('" + req.body.email + "','" + req.body.password + "',now())";

  dbConnector.perfromDBOperation(query, (err, result) => {
  if (err) {
      res.json({ status: false, message: "User not added successfully",token:null })
  } else {
      res.json({ status: true, message: "User added successfully",token:"123456" })
  }
  })

});