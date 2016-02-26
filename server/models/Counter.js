/* @flow */
import mongoose from 'mongoose'
let Schema = mongoose.Schema

const counterSchema = new Schema({
  title: String,
  author: String,
  hidden: Boolean,
  date: {type: Date, default: Date.now},
  count: Number
})

const Counter = mongoose.model('Counter', counterSchema)

export default Counter
