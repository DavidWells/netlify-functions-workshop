// FINAL_START
const middy = require('middy')
const { jsonBodyParser } = require('middy/middlewares')
// FINAL_END
// WORKSHOP_START
exports.handler = (event, context, callback) => {
  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      data: 'hello'
    })
  })
}
// WORKSHOP_END

// FINAL_START
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
// FINAL_END
