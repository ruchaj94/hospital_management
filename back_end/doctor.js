const db = require('./db')
const utils = require('./utils')
const express = require('express')
const router = express.Router()

router.get('/spec/:id', (request, response) => {
    const {id} = request.params
    const connection = db.connect()
    const statement = `select * from doctor where specialization_id=?`
    connection.query(statement, [id], (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.post('/reg',(request,response) => 
{
 const {firstname,lastname,phoneno,altphoneno,email,password,gender,dob,address,rating,specialization,experience,exist,availability} = request.body
    var date = new Date(dob);
   
    const connection = db.connect()
    const statement = "insert into doctor(fname,lname,phone,alternamephone,email,password,birthdate,gender,address,rating,specialization,experience,exist,availability)"+
                                    "values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
   
    connection.query(statement,[firstname,lastname,phoneno,altphoneno,email,password,date,gender,address,rating,specialization,experience,exist,availability],(error, data) => {
        connection.end()
        response. send(utils.createResult(error, data))
    })
})

router.post('/login', (request, response) => {
    const {email,password} = request.body
    const connection = db.connect()
    const statement = `
    select * from doctor where email=? and password = ?`
    connection.query(statement,[email,password], (error, data) => {
        const result = {}
        if(data.length != 0 )
        {
            result['status'] = 'success'
            result['data'] = data
            response.send(result) 
        }
        else
        {   
            result['status'] = 'error'
            result['error'] = error   
            response.send(result)           
        }
        
    })
})


router.put('/:id',(request,response) => 
{
    const {id} = request.params
    const {fname,lname,phone,birthdate} = request.body

    const connection = db.connect()
    const statement = `update doctor set fname = ${fname} where doc_Id = ${id}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.delete('/doc/:id',(request,response) => 
{
    const id = request.params.id
    const connection = db.connect()
    const statement = `delete from doctor where doc_Id = ${id}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send('doctor deleted')
    })
})


module.exports = router