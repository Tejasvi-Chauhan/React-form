
// const PORT=require("env")
const express=require('express')
const app=express();
const PORT=5000;


let users = [
  {
    id: 1,
    name: "Ravi",
    email: "ravi@gmail.com",
    password: "123456",
    
  },
  {
    id: 2,
    name: "Amit",
    email: "amit@gmail.com",
    password: "password",
    
  }
];

users.filter((e)=> e.id==2 
)
app.listen(PORT,()=>{
    console.log(`Server is listening at ${PORT}`)
})

