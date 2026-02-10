
// const PORT=require("env")
const express=require('express')
const app=express();
const PORT=5000;



app.get("/",(req,res)=>{
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
  res.send(users);
})

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

const user=users.filter((u)=>u.id==2);
console.log(user[0].name);
app.listen(PORT,()=>{
    console.log(`Server is listening at ${PORT}`)
})

