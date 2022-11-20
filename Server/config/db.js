const mysql = require('mysql');
const util = require('util');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password:'123456',
  database: 'tech_active'
})

conn.connect(function(err){
    if(err) throw err;
    console.log("Mysql db connected");
})

conn.query=util.promisify(conn.query)
module.exports = conn