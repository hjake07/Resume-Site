const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const fs = require('fs');
app.use(express.urlencoded({extended:false}))
app.use(express.static('./public'))
app.use(express.json())
app.get('/', (req, res)=>{
res.sendFile(__dirname +'/public/index.html')
})
app.get('/contact',(req,res)=>{
res.sendFile(__dirname+"/public/contact.html")
})
app.get('/projects',(req,res)=>{
res.sendFile(__dirname+"/public/projects.html")
})
app.get('/xceed', (req,res)=>{
    res.sendFile(__dirname+"/public/xceed.html")
})
app.get('/paint',(req,res)=>{
    res.sendFile(__dirname+"/public/paint.html")
})
app.get('/pokemon',(req,res)=>{
    res.sendFile(__dirname+"/public/pokemon.html")
})
app.listen(port, ()=>{
console.log('listening on port: ' + port)
})