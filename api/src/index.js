import express from "express";
import "dotenv/config";
import schema from "./graphQLSchema";
import graphqlHTTP from "express-graphql";
import mongoose from "mongoose";
import cors from 'cors'
require("@babel/polyfill");
import About from './models/about'
const app = express();
const { PORT, DB_USER, DB_PASSWORD } = process.env;
app.use(cors())

mongoose.connect(
  `mongodb://${DB_USER}:${DB_PASSWORD}@ds119090.mlab.com:19090/pablond-portfolio`,
  { useNewUrlParser: true },
  () => console.log("Database is connected")
);

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    customFormatErrorFn: (err) => ({ message: err, status: parseInt(err.message) }),
    graphiql: true
  })
);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
