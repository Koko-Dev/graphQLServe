var express = require('express');
var express_graphql = require('express-graphql');

// function buildSchema is important for graphQL itself
var {buildSchema} = require('graphql');

// GraphQL Schema
var schema = buildSchema(`
    type Query {
        message: String
    }
`);

// Implement Resolver to attach a function
var root = {
    message: () => 'Hello World!'
};

// Create an express server and GraphQL endpoint
var app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => console.log('Express GraphQL Now Running on localhost:4000/graphql'));
