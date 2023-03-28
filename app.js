const express = require('express')
const listen = require('./Server/startServer')
const app = express()

app.get('/app', (req, res)=>{
    res.send('WebSite in development!')
})

listen.listen

