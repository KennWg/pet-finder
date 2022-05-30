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