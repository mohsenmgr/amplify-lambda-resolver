/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
      id
      firstname
      lastname
      email
      phone
      streetAddress
      city
      state
      zip
      internalNote
      ssn
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstname
        lastname
        email
        phone
        streetAddress
        city
        state
        zip
        internalNote
        ssn
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const user = /* GraphQL */ `
  query User {
    user {
      id
      firstname
      lastname
      email
      phone
      streetAddress
      city
      state
      zip
      internalNote
      ssn
      createdAt
      updatedAt
      __typename
    }
  }
`;
