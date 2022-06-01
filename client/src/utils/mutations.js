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
mutation Mutation($name: String!, $photo: String!, $description: String!, $lastSeen: String!, $breed: String) {
  addReport(name: $name, photo: $photo, description: $description, lastSeen: $lastSeen, breed: $breed) {
    _id
    name
  }
}
`

// export const CREATE_COMMENT = gql`
// `

// export const DELETE_COMMENT = gql`
// `