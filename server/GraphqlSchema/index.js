/* @flow */
import { GraphQLObjectType, GraphqlSchema, GraphQLInt, GraphQLID, GraphQLString, GraphQLBoolean, GraphQLList, GraphQLNonNull, GraphQLSchema } from 'graphql'
import Counter from '../models/Counter'
import Action from '../models/Action'
import _ from 'lodash'

let ActionType = new GraphQLObjectType({
  name: 'Action',
  fields: {
    type: {
      type: GraphQLString
    },
    date: {
      type: GraphQLString
    }
  }
})

let CounterType = new GraphQLObjectType({
  name: 'Counter',
  fields: {
    _id: {
      type: GraphQLID
    },
    title: {
      type: GraphQLString
    },
    author: {
      type: GraphQLString
    },
    hidden: {
      type: GraphQLBoolean
    },
    date: {
      type: GraphQLString
    },
    count: {
      type: GraphQLInt
    },
    actions: {
      type: new GraphQLList(ActionType),
      resolve: (root) => {
        return Action.find({counter: root.id})
      }
    }
  }
})

let CounterQuery = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    counter: {
      type: CounterType,
      args: {
        id: {
          name: 'id',
          type: GraphQLID
        },
        author: {
          name: 'author',
          type: GraphQLString
        }
      },
      resolve: (parent, {id, author}) => {
        return Counter.findOne({id, author})
      }
    },
    counters: {
      type: new GraphQLList(CounterType),
      args: {
        author: {
          name: 'author',
          type: GraphQLString
        },
        title: {
          name: 'title',
          type: GraphQLString
        }
      },
      resolve: (parent, {author, title}) => {
        return Counter.find(_.merge({}, {author: author, title: title}))
      }
    }
  })
})

export default new GraphQLSchema({query: CounterQuery})

// title: String,
// author: String,
// hidden: Boolean,
// date: {type: Date, default: Date.now},
// count: Number,
// actions: [{ type: String, date: { type: Date, default: Date.now } }]
