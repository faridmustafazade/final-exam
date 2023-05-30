const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const DB = process.env.DB_URL;
mongoose.connect(DB);

const { Schema } = mongoose;

const cardSchema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    bedrooms: {
      type: Number,
      required: true,
    },
    bathrooms: {
      type: Number,
      required: true,
    },
    area: {
      type: Number,
      required: true,
    },
    patio: {
      type: Number,
      required: true,
    },
    garage: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Cards = mongoose.model("card", cardSchema);

// getAll
app.get("/cards", async (req, res) => {
  const getAll = await Cards.find({});
  res.send(getAll);
});
app.get("/cards/:id", async (req, res) => {
  const getId = req.params.id;
  const getAll = await Cards.findById(getId);
  res.send(getAll);
});
app.post("/cards", async (req, res) => {
  const getBody = req.body;
  const postAll = await new Cards(getBody);
  postAll.save();
  res.send(postAll);
});
app.delete("/cards/:id", async (req, res) => {
  const getId = req.params.id;
  const deleteId = await Cards.findByIdAndDelete(getId);
  res.send(deleteId);
});
app.put("/cards", async (req, res) => {
  const getId = req.params.id;
  const getBody = req.body;
  const putAll = await Cards.find(getId, getBody, { new: true });
  res.send(putAll);
});

const Port = process.env.PORT;
app.listen(Port, () => {
  console.log("Server is up");
});
