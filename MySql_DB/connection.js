const mysql = require('mysql')

const myConnection = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"@Lawrence1",
    database:"developer"
})

myConnection.connect((err)=>{
    if(err){
        return console.log({message: err})
    }
    return console.log("Connected to Database")
})

module.exports = myConnection