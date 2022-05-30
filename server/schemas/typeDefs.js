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
  allReports (name: String!, photo: String!): [Report]
  report(_id: ID!, name: String, breed: String!, photo: String!, description: String!, lastSeen: String!, createdAt: String!, createdBy: ID!): Report
  reportsByUserId(createdBy: ID!): [Report]
}

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!, address: String!): Auth
  addReport(name: String!, breed: String, photo: String!, description: String, lastSeen: String!, createdAt: String!, createdBy: ID!): Report
  updateReport(name: String!, breed: String, photo: String!, description: String, lastSeen: String!, createdAt: String!, createdBy: ID!): Report
  deleteReport(_id: ID!): Report
  addComment(report: ID!, user: ID!, commentBody: String!, createdAt: String!): Report

}

  `;





// REMOVED when refactoring
// type Query {
//   allReports (name: string!, photo: String!): [Report] ----must include
//   report: Report
//   reportsByUser(createdBy: ID!): [Report]
//   userReportsByComments (user: ID!, report: ID!, commentId: ID!): [Report]
// }


// type Comment {
//   commentId: ID --deleted
//   report: Report
//   user: User
//   commentBody: String
//   createdAt: String
// }

// export typdefs
module.exports = typeDefs;