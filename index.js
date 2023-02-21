const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get("/",(req,resp)=>{

    resp.send("Hello World")
})


app.post("/add",(req,resp)=>{
    const num1 = req.num1;
    const num2 = req.num2;
     const sum = num1 + num2
     if(sum < 100000){
         console.log("Underflow")
     }
     else if(sum > 100000){
        console.log("Overflow")
     }
     else{
        console.log("Invalid data types")
     }
     resp.send(`{ status: “error",
     message: “the sum of given two numbers”, 
    sum: ${num1 + num2}}
    `)
 })


 
app.post("/sub",(req,resp)=>{
    const num1 = req.num1;
    const num2 = req.num2;
     const sum = num1 - num2
     if(sum < 100000){
         console.log("Underflow")
     }
     else if(sum > 100000){
        console.log("Overflow")
     }
     else{
        console.log("Invalid data types")
     }
     resp.send(`{ status: “error",
     message: “the difference of given two numbers”, 
    difference: ${num1-num2 }}
    `)
 })
 
 app.post("/multiply",(req,resp)=>{
    const num1 = req.num1;
    const num2 = req.num2;
     const sum = num1 * num2
    
     if(sum < 100000){
         console.log("Underflow")
     }
     else if(sum > 100000){
        console.log("Overflow")
     }
     else{
        console.log("Invalid data types")
     }
     resp.send(`{ status: “error",
     message: “The product of given two numbers”, 
    result: ${num1*num2 }}
    `)
 })

 app.post("/divide",(req,resp)=>{
    const num1 = req.num1;
    const num2 = req.num2;
     const sum = num1 / num2
    if(num2 === 0){
        console.log("Cannot divide by zero")
    }
     else if(sum < 100000){
         console.log("Underflow")
     }
     else if(sum > 100000){
        console.log("Overflow")
     }
     else{
        console.log("Invalid data types")
     }
     resp.send(`{ status: “error",
     message: “the division of given two numbers”, 
    result: ${num1/num2 }}
    `)
 })


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;