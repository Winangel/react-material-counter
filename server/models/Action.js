/* @flow */
import mongoose from 'mongoose'
import { Schema } from 'mongoose'

const ActionSchema = new Schema({
  date: {type: Date, default: Date.now},
  type: String,
  counter: {type: Schema.Types.ObjectId, ref: 'Counter'}
})

const Action = mongoose.model('Action', ActionSchema)

export default Action
