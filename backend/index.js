const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const cors = require('cors');

require('dotenv').config();

const schema = require('./schemas')
const createUser = require("./services");

const users = [{id: 1, firstname: 'Oak', lastname: 'Latch'}] // crutch

const app = express();

app.use(cors())

const root = {
    getAllUsers: () => {
        return users;
    },

    createUser: ({input}) => {
        const user = createUser(input);
        users.push(user);
        return user;
    },
}

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
    rootValue: root,
}))

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`server stated on ${PORT}`));
