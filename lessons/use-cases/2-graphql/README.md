# Using functions for GraphQL APIs

This lesson will walk through using functions as a GraphQL backend.

- [Lesson Steps](#lesson-steps)
- [Alternative implementations](#alternative-implementations)
- [Additional resources](#additional-resources)
- [Complete code](#complete-code)

## Lesson Steps

1. Create this site in Netlify

    Open your terminal and run the following command:

    ```bash
    netlify init --manual
    ```

    Choose "create & configure a new site", then add a site name or hit enter for one to be generated for you.

2. Install our graphQL dependencies

    Change directories into our functions folder and create new package.json

    ```bash
    cd functions && npm init -y
    ```

    Now install the `apollo-server-lambda` npm package

    ```bash
    npm install apollo-server-lambda
    ```

3. In `functions/graphql.js`, require 'apollo-server-lambda'

4. In `functions/graphql.js`, define your graphQL types

5. In `functions/graphql.js`, define your graphQL resolvers

6. In `functions/graphql.js`, create a new `ApolloServer` and pass it your typeDefs and resolves

7. In `functions/graphql.js`, turn your server into a lambda compatible function signature

    ```js
    server.createHandler()
    ```

    Then export the handler

8. Deploy the site

    Open your terminal and run the following command:

    ```bash
    netlify deploy -p
    ```

    Open the frontend and test your new graphQL endpoint

    ```
    netlify open:site
    ```





## Alternative implementations

- [AWS Appsync](https://docs.aws.amazon.com/appsync/index.html)
- [Prisma](https://www.prisma.io/)

## Additional resources

- [The Fullstack Tutorial for GraphQL](https://www.howtographql.com/)

## Complete code

If you need help or get stuck refer to the completed code of this lesson

[View Complete Code](https://github.com/DavidWells/netlify-functions-workshop/tree/master/lessons-code-complete/use-cases/2-graphql)
