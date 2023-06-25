const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  userId: {
    type: Number,
  },
  id: {
    type: Number,
  },
  title: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

module.exports = mongoose.model("todo", todoSchema);
