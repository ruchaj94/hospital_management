const db = require('./db');
const utils = require('./utils');
const express = require('express');
const router = express.Router();
const uniqid = require('uniqid');
const mail = require('./mailsender');

router.get('/code',(request,response) => {

    var bookingcode = uniqid.time()
    console.log('booking code : ',bookingcode)
})

router.get('/bookings',(request,response) => {
    const connection = db.connect()
    const statement = `select * from booking_demo`
    connection.query(statement,(error,data) => {
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


router.post('/', (request, response) => {
    const {specialization,doc_name,slot,time_slot,options,visitType,date,fname,lname,phoneno,email} = request.body
    date1 = new Date(date);

    //Generate 8 byte unique id's based on the current time 
    var bookingcode = uniqid.time()
    console.log('booking code : ',bookingcode)


//    console.log('date1 : ',date1)
    const connection = db.connect()
    const statement = `insert into booking_demo(specialization,doc_name,slot,time_slot,options,visitType,date,booking_code,fname,lname,phoneno,email) values(?,?,?,?,?,?,?,?,?,?,?,?)`
    connection.query(statement,[specialization,doc_name,slot,time_slot,options,visitType,date1,bookingcode,fname,lname,phoneno,email], (error, data) => {
        //console.log(data)
        // connection.end()
        // response.send(utils.createResult(error, data))  

        const result = {}
        if(data.length != 0 )
        {
            result['status'] = 'success'
            result['data'] = data

           // console.log(result)
                // "Hello +'fname'
                // Greetings for the day
                // your apooointment booking is been confirmed with 'Dr.doc_name' on 
                //'date' in 'slot' slot at 'time_slot'
                // for 'visit type'.with booking code 'booking_code'.
                // Be on time!!!
                // Have a good day "
                // }

                var body = "<H2>Hello "+ fname + lname + "</H2>"+ 
                           "<H3>Greetings for the day!!!<H3>" + 
                           "<P> Your apooointment booking is been booked with Dr." + doc_name +
                           " on " + date + "in" + slot + "slot at " + time_slot +
                           " for " + visitType + "with BOOKING CODE : " + bookingcode +"</P>"+ 
                           "<p> BE ON TIME !!!</p>"
           mail.senMail('rucha27jambhulkar@gmail.com',email,'Appointment Booking Details',body, function(mailError, msg){
            response.send(result) 

           });
        }
        else
        {   
            result['status'] = 'error'
            result['error'] = error   
            response.send(result)           
        }
    })
})

module.exports = router