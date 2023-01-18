const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const cors = require('cors');

const schema = require('./schemas')

const app = express();

app.use(cors())
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema
}))

const PORT = 5000;

app.listen(PORT, () => console.log(`server stated on ${PORT}`));
