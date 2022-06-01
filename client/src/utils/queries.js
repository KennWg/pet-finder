import { gql } from '@apollo/client';

export const QUERY_REPORTS_BY_USER_ID = gql`
query Query {
  reportsByUserId {
    name
    breed
  }
}
`;

export const QUERY_ALL_REPORTS = gql`
query Query {
  allReports {
    name
    breed
    photo
    createdBy {
      username
    }
  }
}
`
