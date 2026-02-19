require("dotenv").config();

const express = require("express");

const PORT = process.env.PORT || 5000;

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
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
    },
  ];
  res.send(users);
});

app.get("/lib", (req, res) => {
  res.send("Lib");
});

app.get("/lib", (req, res) => {});
const user = users.filter((u) => u.id == 2);
console.log(user[0].name);

app.post("/datafor", (req, res) => {
  console.log(req.body);
  res.res.status(200).json({ message: "Data received successfully" });
});

app.post("/data", (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "Data received successfully" });
});
const user=users.find((u)=>u.id==2);
console.log(user.name);

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
