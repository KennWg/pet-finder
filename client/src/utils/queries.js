import { gql } from '@apollo/client';

// export const QUERY_ME = gql`
//     me {
//       _id
//       username
//       email
//       address 
//     }
// `;

export const QUERY_REPORTS_BY_USER_ID = gql`
query Query {
  reportsByUserId {
    name
    breed
  }
}
`;