import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userSchema from "./userSchema.js";

const app = express();
const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`listening on localhost:${port}`));

app.use(express.json());
app.use(cors());

const connectionUrl =
  "mongodb+srv://admin:cogpuc-zakro5-niFfiw@cluster0.ag9w9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(connectionUrl, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

app.get("/users", (req, res) => {
  userSchema.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/users", (req, res) => {
  const db = req.body;

  userScema.create(db, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

/*app.patch("/usersname/:", (req, res) => {
  var updateObject = req.body; // {last_name : "smith", age: 44}

  var name = req.params.name;
  People.findOneAndUpdate({ userEmail: email }, { $set: updateObject })
    .then(() => {
      res.sendStatus({ message: "success" });
    })
    .catch(err => {
      res.status(500).send(err);
    });
});*/
