const getCustomer = /* GraphQL */`
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
    ssn
  }
  }
`;

const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
      ssn
    }
  }
`;

module.exports = {
  getCustomer,
  updateCustomer
};