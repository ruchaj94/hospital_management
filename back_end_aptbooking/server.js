const mysql = require('mysql')
const bodyparser = require('body-parser')
const express = require('express')
const db = require('./db')
const utils = require('./utils')
const routerdoctor = require('./doctor')
const routerspecialization = require('./specialization')
const routerbooking =  require('./booking')
const cors = require('cors')
const app = express()

app.use(bodyparser.json())
app.use(cors())
app.use('/doc',routerdoctor)
app.use('/spec',routerspecialization)
app.use('/book',routerbooking)


// for CORS
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.get('/',(request,response) => 
{
    console.log('inside backend get')
    const connection = db.connect()
    const statement = `select * from doctor`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})


app.listen(4000,'0.0.0.0',() => 
{
    console.log('server started at port 4000')
})