require("dotenv").config();
const { ApolloServer } = require("apollo-server-express");
const { graphqlUploadExpress } = require("graphql-upload");
const mongoose = require("mongoose");
const express = require("express");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const path = require("path");

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req })
});

// app.use("/graphql", graphqlUploadExpress());

server.applyMiddleware({ app, path: "/graphql" });

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
}

const port = process.env.PORT || 5000;

mongoose
  .connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useFindAndModify: false },
    () => {
      console.log("Connected to DB");
    }
  )
  .then(app.listen({ port }, () => console.log(`server Running on ${port}`)))
  .catch(err => console.log("failed to start server"));
