const express = require("express");
const cors = require("cors");

const app = express();

const port = 8000;

app.use(express.json());
app.use(cors());

const users = [];

const checkValidUserCredential = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Email and password are required field",
    });
  }

  next();
};

const checkUserExist = (req) => {
  const { email } = req.body;

  const existingUser = users.find((user) => user.email == email);

  return existingUser;
};

app.get("/", (req, res) => {
  res.json({
    message: "Hello World from server updated!",
  });
});

app.post("/signup", checkValidUserCredential, (req, res) => {
  const { email, password } = req.body;

  const existingUser = checkUserExist(req);

  console.log("existingUser", existingUser);

  if (existingUser) {
    return res.status(400).json({
      message: "User already exists",
    });
  }

  users.push({
    email,
    password,
  });

  res.status(201).json({
    message: "User Created Successfully",
  });
});

app.post("/login", checkValidUserCredential, (req, res) => {
  const { email, password } = req.body;

  const existingUser = checkUserExist(req);

  if (!existingUser) {
    return res.status(404).json({
      message: "User Not Found",
    });
  }

  if (existingUser.password !== password) {
    return res.status(401).json({
      message: "Enter valid credential",
    });
  }

  return res.status(200).json({
    message: "Login Successfull",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// 100
// 200 => Success
// 300
// 400 => User Mistake
// 500 => Machine Mistake

//CORS

// 5173 -> 8000
