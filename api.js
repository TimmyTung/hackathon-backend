import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userSchema from "./userSchema.js";

const app = express();
const port = process.env.PORT || 8080;

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

app.get("/users/:email", (req, res) => {
  var email = req.params.email;

  userSchema.findOne({ userEmail: email }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

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

  userSchema.create(db, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.patch("/users/:name", (req, res) => {
  var updateObject = req.body;

  var name = req.params.name;
  userSchema
    .findOneAndUpdate({ userEmail: name }, { $set: updateObject })
    .then(() => {
      res.sendStatus({ message: "success" });
    })
    .catch(err => {
      res.status(500).send(err);
    });
});
