const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./ConnectDB/connect')
const router = require('./Router/router')



const app = express()
app.use(cors())
app.use(bodyparser.json())

dotenv.config()
const port = process.env.PORT

app.listen(port , ()=>{
    console.log(`server is running in port:${port}`);
    connectDB()
    
})

app.use('/api' , router)

