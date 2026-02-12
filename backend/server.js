require("dotenv").config();

const express=require('express')

const PORT=process.env.PORT || 5000;

const cors = require("cors");

const app = express();

app.use(cors());          

app.use(express.json());


app.get("/",(req,res)=>{


  res.send(users);
})


app.post("/data",(req,res)=>{
  console.log(req.body);
  res.json({ message: "Data received successfully" });

})

const user=users.filter((u)=>u.id==2);
console.log(user[0].name);

// const user=users.find((u)=>u.id==2);
// console.log(user.name);

app.listen(PORT,()=>{
    console.log(`Server is listening at ${PORT}`)
})

