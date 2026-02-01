const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");

const app = express();

const port = 8000;

app.use(express.json());
app.use(cors());

// DB - START

const uri =
  "mongodb+srv://vijayanandr2000_db_user:H1hOil5JzbAVvSlF@cluster0.yl9ej0e.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

const userCollection = client.db("loginApp").collection("users");

// DB - END

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

  //   const existingUser = users.find((user) => user.email == email);
  const existingUser = userCollection.findOne({ email });

  return existingUser;
};

const convertMongoObjectId = (id) => {
  const userId = new ObjectId(id);
  return userId;
};

app.get("/", (req, res) => {
  res.json({
    message: "Hello World from server updated!",
  });
});

app.post("/signup", checkValidUserCredential, async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await checkUserExist(req);

  console.log("existingUser", existingUser);

  if (existingUser) {
    return res.status(400).json({
      message: "User already exists",
    });
  }

  //   users.push({
  //     email,
  //     password,
  //   });

  const newUser = await userCollection.insertOne({ email, password });

  console.log("newUser", newUser);

  res.status(201).json({
    message: "User Created Successfully",
    newUser,
  });
});

app.post("/login", checkValidUserCredential, async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await checkUserExist(req);

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
    id: existingUser._id,
  });
});

app.delete("/user", async (req, res) => {
  const { id } = req.query;
  //   const {id} = req.param;

  //   console.log("data", data);

  const userMongoId = convertMongoObjectId(id);

  const deletedUser = await userCollection.deleteOne({ _id: userMongoId });

  if (deletedUser.deletedCount > 0) {
    return res.status(200).json({
      message: "User deleted successfull",
    });
  }

  return res.status(404).json({
    message: "Invalid User",
  });
});

app.put("/user", async (req, res) => {
  const { id } = req.query;
  const { newPassword } = req.body;

  const userMongoId = convertMongoObjectId(id);

  const updatedUser = await userCollection.updateOne(
    {
      _id: userMongoId,
    },
    {
      $set: {
        password: newPassword,
      },
    },
  );

  if (updatedUser.modifiedCount > 0) {
    return res.status(200).json({
      message: "User updated successfull",
    });
  }

  return res.status(404).json({
    message: "Invalid User",
  });
});

app.listen(port, () => {
  console.log(`Example app with DB listening on port ${port}`);

  run().catch(console.dir);
});

// 100
// 200 => Success
// 300
// 400 => User Mistake
// 500 => Machine Mistake

//CORS

// 5173 -> 8000
