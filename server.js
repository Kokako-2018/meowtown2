var express = require('express') // Use express for server
var hbs = require('express-handlebars') //Use handlebars for our templating
var bodyParser = require('body-parser') //?? I think it's used for handlebar

var server = express()

// Middleware-- don't fully know what this means.
server.engine('hbs', hbs({
  defaultLayout : 'main',
  extname: 'hbs'
}))

server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(bodyParser.urlencoded({ extended: false }))

server.get('/', function (req,res) {
  res.render('home')
})

server.get('/done', function (req,res) {
  res.render('done')
})

server.get('/images', function (req,res) {
  res.render('images')
})


module.exports = server

