const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const { MONGO_URL } = require("./config");

const server = new ApolloServer({
  typeDefs,
  resolvers
});

mongoose.connect(MONGO_URL, { useNewUrlParser: true }, () => {
  console.log("Connected to DB");
});

server.listen({ port: 5000 }).then(({ url }) => console.log(url));
