const mongoose = require('mongoose');

const schema = mongoose.Schema({
  title: {type: String, required: true},
  done: {type: Boolean, required: true}
})

const TodoModel = mongoose.model("Todo", schema);

module.exports = TodoModel;