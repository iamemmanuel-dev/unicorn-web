const mongoose = require('mongoose')

const PersonSchema = new mongoose.Schema({
  image: String,
  name: String,
})

module.exports = PersonSchema
