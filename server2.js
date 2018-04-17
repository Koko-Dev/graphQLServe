var express = require('express');
var express_graphql = require('express-graphql');

// function buildSchema is important for graphQL itself
var {buildSchema} = require('graphql');

// GraphQL Schema
var schema = buildSchema(`
    type Query {
        course(id: Int!): Course
        courses(topic: String): [Course]
    }
    type Course {
        id: Int
        title: String
        author: String
        description: String
        topic: String
        url: String
    }
`);

var coursesData = [
    {
        id: 1,
        title: 'The Complete Node.js Developer Course',
        author: 'Andrew Mead, Rob Percival',
        description: 'Learn Node.js by building real-world applications with Node, Express, MongoDB, Mongoose, and REACT',
        topic: 'Node.js',
        url: 'https://www.udemy.com/the-complete-nodejs-developer-course-2/'
    },
    {
        id: 2,
        title: 'Github & Collaboration',
        author: 'Udacity',
        description: 'This course covers the essentials of working with remote repositories and collaborating with others',
        topic: 'Git',
        url: 'https://www.udacity.com/course/github-collaboration--ud456'
    },
    {
        id: 3,
        title: 'AI Programming with Python',
        author: 'Udacity',
        description: 'Learn Python, NumPy, Pandas, Matplotlib, PyTorch, and Linear Algebra—the foundations for building your own neural network.',
        topic: 'Python',
        url: 'https://www.udacity.com/course/ai-programming-python-nanodegree--nd089/'
    },
    {
        id: 4,
        title: 'Version Control with Git',
        author: 'Udacity',
        description: 'This course covers the essentials of using the version control system Git.',
        topic: 'Git',
        url: 'https://www.udacity.com/course/version-control-with-git--ud123'
    },
    {
        id: 5,
        title: 'React Nanodegree',
        author: 'Udacity',
        description: 'React is completely transforming Front-End Development. Master this powerful UI library from Facebook with Udacity and the experts from React Training.',
        topic: 'React',
        url: 'https://www.udacity.com/course/react-nanodegree--nd019'
    }
];

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
