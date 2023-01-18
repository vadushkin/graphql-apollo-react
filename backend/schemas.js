const {buildSchema} = require('graphql');

const schema = buildSchema(`
    
    type User {
        id: ID
        username: String
        age: Int
        posts: [Post]
    }
    
    type Post {
        id: ID
        title: String
        body: String
    }

`)

module.exports = schema;