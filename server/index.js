const express = require('express');
const cors = require('cors');
const colors = require('colors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');

// DB connection
const connectDB = require('./config/db');
// Schema
const schema = require('./schema/schema');

const port = process.env.PORT || 5000;

const app = express();

// Connect to db
connectDB();

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

app.listen(port, console.log(`Server running on port ${port}`));
