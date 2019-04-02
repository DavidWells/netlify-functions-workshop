/* Triggered when a user signs up via Netlify Identity. */

// function test(event, context, callback) {
exports.handler = function(event, context, callback) {
  console.log('identity-signup')
  //** Debugger
  console.log('event', event)
  console.log('context', context)
  /**/
}
