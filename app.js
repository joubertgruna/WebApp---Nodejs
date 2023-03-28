const express = require('express')
const listen = require('./Server/startServer')
const app = express()

app.get('/', (req, res)=>{
    res.end('WebSite in development!')
})

listen.listen

