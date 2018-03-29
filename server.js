var express = require('express') // Use express for server
var hbs = require('express-handlebars') //Use handlebars for our templating
var bodyParser = require('body-parser') //?? I think it's used for handlebar
var animals = require('./animals.json')

var server = express()

// Middleware-- don't fully know what this means.
server.engine('hbs', hbs({
  //defaultLayout: 'main',
  extname: 'hbs'
}))

server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(bodyParser.urlencoded({ extended: false }))

server.get('/', function (req,res) {
  res.render('home')
})

var testAnimals = [
  {animal: 'bear'},
  {animal: 'sloth'},
  {animal: 'pug'}
]
//Dev Work, feel free to change the get functions up above tho.

server.get('/dev', function (req, res) {
  console.log(animals)
  res.render('test', animals)
})

module.exports = server

