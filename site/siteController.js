const express = require('express');
const site = express.Router()

site.get('/', (req, res)=>{
    res.send('statusCode(200)')
})

site.get('/home/:nome/:idade', (req, res)=>{
    var nome = req.params.nome; 
    var idade = req.params.idade; 

    if(idade < 18){
        res.send('Você não permissão para acessar o conteúdo')
    }else{
        res.send(`Well come the Home page, ${nome}`)
    }    
})

module.exports = site