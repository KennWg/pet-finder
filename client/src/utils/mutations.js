import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation Mutation($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      username
    }
  }
}
`;

export const CREATE_USER = gql`
mutation Mutation($username: String!, $email: String!, $password: String!, $address: String!) {
  addUser(username: $username, email: $email, password: $password, address: $address) {
    token
    user {
      _id
      username
      email
      address
    }
  }
}
`

export const CREATE_REPORT = gql`
mutation Mutation($name: String!, $photo: String!, $lastSeen: String!, $createdBy: ID!, $breed: String, $description: String) {
  addReport(name: $name, photo: $photo, lastSeen: $lastSeen, createdBy: $createdBy, breed: $breed, description: $description) {
    _id
    name
    breed
    photo
    description
    lastSeen
    createdAt
    createdBy {
      _id
      username
      email
      address
    }
  }
}
`