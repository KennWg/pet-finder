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
export const QUERY_ME = gql`
query Query {
  me {
    _id
    name
    breed
    photo
    description
    lastSeen
    createdAt
  }
}
`
export const REPORT_BY_REPORT_ID = gql`
query ReportByID($id: ID!) {
  report(_id: $id) {
    _id
    name
    breed
    photo
    description
    lastSeen
    createdAt
    createdBy {
      username
      _id
      email
    }
    comments {
      _id
      user {
        username
        _id
        email
      }
      commentBody
    }
  }
}
`