// WORKSHOP_START
/* Step 3. In this_file, require 'apollo-server-lambda' */
// WORKSHOP_END
// FINAL_START
const { ApolloServer, gql } = require('apollo-server-lambda')
// FINAL_END

// WORKSHOP_START
/* Step 4. In this_file, define your graphQL types */
// WORKSHOP_END
// FINAL_START
const typeDefs = gql`
  type Query {
    hello: String
  }
`
// FINAL_END

// WORKSHOP_START
/* Step 5. In this_file, define your graphQL resolvers */
// WORKSHOP_END
// FINAL_START
const resolvers = {
  Query: {
    hello: (root, args, context) => {
      return 'Hello, world!'
    }
  }
}
// FINAL_END

// WORKSHOP_START
/* Step 6. In this_file, create a new `ApolloServer` and pass it your typeDefs and resolves */
// WORKSHOP_END
// FINAL_START
const server = new ApolloServer({
  typeDefs,
  resolvers
})
// FINAL_END

// WORKSHOP_START
/* Step 7. In this_file, turn your server into a lambda compatible function signature

    ```js
    server.createHandler()
    ```

    Then export the handler
*/
// WORKSHOP_END
// FINAL_START
exports.handler = server.createHandler()
// FINAL_END
