const mysql = require('mysql')

function connect() {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'rucha',
        password: 'rucha',
        database: 'hospital',
        port: 3306
    })

    connection.connect()
    return connection
}

module.exports = {
    connect: connect
}
