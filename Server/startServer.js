const express = require('express')
const app = express()

const listen = app.listen(3000, (err)=>{
    if(err){
        console.log('Error:', err)
    }else{
        console.log('Server listening on port 3000')
    }
})

module.exports = listen