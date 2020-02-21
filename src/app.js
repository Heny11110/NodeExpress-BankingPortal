const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
app.set(path.join(__dirname,'/views'))
app.set('view engine', 'ejs')
app.use(express.static('public'));
app.get('/', function (req, res) {
  res.send('root')
})
app.get('/', function (req, res) {
  res.render('index', { title: 'Index' })
})
const port = 3000
app.listen(port, () => console.log('PS Project Running on port 3000! ${port}!'))
