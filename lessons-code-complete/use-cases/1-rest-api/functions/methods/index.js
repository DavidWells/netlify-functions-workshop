const Create = require('./methods/create')
const Read = require('./methods/read')
const Update = require('./methods/read')
const Delete = require('./methods/delete')
const ReadAll = require('./methods/read-all')

module.exports = {
  create: Create,
  read: Read,
  readAll: ReadAll,
  update: Update,
  delete: Delete
}
