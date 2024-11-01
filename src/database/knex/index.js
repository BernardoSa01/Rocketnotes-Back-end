const config = require("../../../knexfile")
const knex = require = require("knex")

const connection = knex(config.development)

module.exports = connection