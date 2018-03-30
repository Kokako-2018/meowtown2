var express = require('express') // Use express for server
var hbs = require('express-handlebars') //Use handlebars for our templating
var bodyParser = require('body-parser') //?? I think it's used for handlebar
var animals = require('./animals.json')

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

//Dev Work, feel free to change the get functions up above tho.

//when server gets a GET request to /images, render a page 
//based off our images view, that displays eveyr image in the
//animals.json in order
server.get('/images', function (req, res){
  var arr = []
  console.log('req query is: ')
  console.log(req.query)
  if (typeof(req.query.species) != 'object'){
    arr.push(req.query.species)
    }
  else{
    arr = req.query.species
  }
  console.log('the arr is: ')
  console.log(arr)
  console.log('='.repeat(60))
  var theChosen = animals.animals.filter(function(animal){
    for (let i = 0; i < arr.length; i++) {
      if (animal.species == arr[i])
      return animal.species == arr[i]
    }
  })

  console.log('theChosen is: ')
  console.log(theChosen)
  randomise(theChosen)
  console.log('theChosen is: ')
  console.log(theChosen)
  res.render('images',{animals: theChosen})

})

server.get('/done', function (req,res) {
  res.render('done')
})

function randomise(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp;
    
  }
}

module.exports = server

