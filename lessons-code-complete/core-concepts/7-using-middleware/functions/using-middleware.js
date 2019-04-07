const middy = require('middy')
const { jsonBodyParser } = require('middy/middlewares')

const businessLogic = (event, context, callback) => {
  console.log(typeof event.body) // object
  /* Do my custom stuff */
  console.log('⊂◉‿◉つ')
  /* return a response */
  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      data: 'hello'
    })
  })
}

const myMiddleware = (config) => {
  // might set default options in config
  return ({
    before: (handler, next) => {
      // might read options from `config`
    },
    after: (handler, next) => {
      // might read options from `config`
    },
    onError: (handler, next) => {
      // might read options from `config`
    }
  })
}

// Export the handler
exports.handler = middy(businessLogic)
  .use(jsonBodyParser())
  .use(myMiddleware())
