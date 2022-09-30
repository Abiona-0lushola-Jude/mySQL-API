const express = require('express')
const app = express()
const PORT = process.env.PORT || 9000
const DeveloperRouter = require('./Routes/developerRouter')

// middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))


// routes
app.use('/developer', DeveloperRouter)



app.listen(PORT, ()=> console.log(`SERVER IS RUNNING ON PORT ${PORT} AND CONNECTED TO MYSQL..........`))