const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const express = require("express");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const path = require("path");

require("dotenv").config();
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req })
});

server.applyMiddleware({ app, path: "/graphql" });

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
}

const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
    console.log("Connected to DB");
  })
  .then(app.listen({ port }, () => console.log(`server Running on ${port}`)))
  .catch(err => console.log("failed to start server"));
