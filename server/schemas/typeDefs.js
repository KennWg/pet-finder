// import the gql tagged template function

const {gql} = require ('apollo-server-express')

// create out typeDefs
const typeDefs = gql`
type Query {
    helloWorld: String
  }`;


// export typdefs
module.exports = typeDefs;