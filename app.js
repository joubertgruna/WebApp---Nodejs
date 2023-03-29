const express = require('express')
// const listen = require('./Server/startServer')
const siteRouter = require('./Site/siteController') 
const app = express()

app.use('/site', siteRouter)

app.get('/app', (req, res)=>{
    res.send('WebSite in development!')
})

app.listen(3000, (err)=>{
    if(err){
        console.log('Error:', err)
    }else{
        console.log('Server listening on port 3000')
    }
})


