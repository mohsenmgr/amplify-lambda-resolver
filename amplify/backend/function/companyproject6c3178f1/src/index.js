/* Amplify Params - DO NOT EDIT
	API_COMPANYPROJECT_GRAPHQLAPIENDPOINTOUTPUT
	API_COMPANYPROJECT_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const resolvers = require('./resolvers');

exports.handler = async (event) => {
  console.log('EVENT:', JSON.stringify(event));
  const typeHandler = resolvers[event.typeName];
  if (typeHandler) {
    const resolver = typeHandler[event.fieldName];
    if (resolver) {
        console.log(JSON.stringify(event));
      return await resolver(event);
    }
  }
  throw new Error("Resolver not found.");
}