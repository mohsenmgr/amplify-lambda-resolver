const apiRequest = require('./apiRequest');
const {
  getCustomer,
  updateCustomer
} = require('./graphql');

const resolvers = {
  Query: {
    user: async ctx => {
        console.log(`ctx is ${JSON.stringify(ctx)}`);
      try {
        const { data } = await apiRequest(getCustomer, 'GetCustomer', {
          id: ctx.identity.claims.sub,
        });
        return data?.getCustomer
      } catch (err) {
        throw(err)
      }
    }
  },
  Mutation: {
    editUser: async ctx => {
      try {
        const args = JSON.parse(JSON.stringify(ctx));
        const userId = ctx.identity.claims.sub;
        Object.keys(args).forEach(key => args[key] === null && delete args[key]);
        
        const keysToRemove = ['typeName', 'fieldName', 'identity'];
        keysToRemove.forEach(key => delete args[key]);

        console.log('args:', args);
        const { data } = await apiRequest(updateCustomer, 'UpdateCustomer', {
          input: {
            id: userId,
            ...args
          }
        });
        return data?.updateCustomer;
      } catch (err) {
        throw(err);
      }
    }
  }
}

module.exports = resolvers;