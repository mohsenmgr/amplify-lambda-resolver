/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
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
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
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
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
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
export const editUser = /* GraphQL */ `
  mutation EditUser($ssn: String) {
    editUser(ssn: $ssn) {
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
