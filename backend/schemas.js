const {buildSchema} = require('graphql');

const schema = buildSchema(`
    
    type User {
        id: ID
        firstname: String
        lastname: String
        posts: [Post]
    }
    
    type Post {
        id: ID
        title: String
        body: String
    }
    
    input UserInput {
        id: ID
        firstname: String!
        lastname: String!
        posts: [PostInput]
    }
    
    input PostInput {
        id: ID
        title: String!
        body: String!
    }
    
    type Query {
        getAllUsers: [User]
    }
    
    type Mutation {
        createUser(input: UserInput): User
    }
    
`)

module.exports = schema;
