const db = require('./db')
const utils = require('./utils')
const express = require('express')
const router = express.Router()

router.get('/', (request, response) => {
    const connection = db.connect()
    const statement = `select id,name from specialization`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

module.exports = router