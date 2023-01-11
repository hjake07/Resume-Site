const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const fs = require('fs');
app.use(express.urlencoded({extended:false}))
app.use(express.static('./public'))
app.use(express.json())
app.get('/', (req, res)=>{
res.render('index')
})
app.listen(port, ()=>{
console.log('listening on port: ' + port)
})