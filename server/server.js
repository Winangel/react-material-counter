/* @ flow */
import express from 'express'
import mongoose from 'mongoose'
import graphqlHTTP from 'express-graphql'
import GraphqlSchema from './GraphqlSchema'
import Counter from './models/Counter'
import Action from './models/Action'
import bodyParser from 'body-parser'

let db = mongoose.connection
mongoose.connect('mongodb://localhost/react-material-counter-db')

db.on('connected', () => {
  console.log('Databse is connected')
})

db.on('error', (err) => {
  console.log(err)
  process.exit(1)
})

let app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/query', graphqlHTTP({schema: GraphqlSchema, graphiql: true, pretty: true}))

app.get('/', (req, res) => {
  Counter.find().exec((err, data) => {
    if (err) {
      return res.json({error: err})
    }
    return res.json({result: data})
  })
})

app.post('/counter', (req, res) => {
  let counter = new Counter({title: req.body.title, count: 0})
  counter.save((err) => {
    if (err) {
      return res.json({error: err})
    }
    return res.json({result: counter})
  })
})

app.post('/action', (req, res) => {
  let action = new Action({type: req.body.type, counter: req.body.counterId})
  action.save((err) => {
    if (err) {
      return res.json({error: err})
    }
    return res.json({result: action})
  })
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000')
})
