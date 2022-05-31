// import the gql tagged template function

const { gql } = require('apollo-server-express')

// create out typeDefs
const typeDefs = gql`

type User {
    _id: ID
    username: String
    email: String
    address: String
    reports: [Report]
  }

type Report {
    _id: ID
    name: String
    breed: String
    photo: String
    description: String
    lastSeen: String
    createdAt: String
    createdBy: User
    comment: [Comment]
}

type Comment {
  _id: ID
  report: Report
  user: User
  commentBody: String
  createdAt: String
}

type Auth {
  token: ID!
  user: User
}

type Query {
  allUsers: [User]
  allReports: [Report]
  report (_id: ID!): Report
  reportByUserComments(user: ID!): [Report]
  reportsByUserId(createdBy: ID!): [Report]
}

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!, address: String!): Auth
  addReport(name: String!, breed: String, photo: String!, description: String!, lastSeen: String!): Report
  updateReport(name: String!, breed: String, photo: String!, description: String, lastSeen: String!): Report
  deleteReport(_id: ID!): Report
  addComment(report: ID!, commentBody: String!): Report

}

  `;

// export typdefs
module.exports = typeDefs;