var server = require ('../server')
var request = require('supertest')
var cheerio = require('cheerio')

var animals = require('../animals.json')

test('Test is working', () => {
    expect(true).toBe(true)
})

test('/', function(done){
    request(server)
        .get('/')
        .expect(200)
        .end(function(err, res){
            expect(err).toBeFalsy()
            done()
        })
})

test('GET / renders', function(done){
    request(server)
        .get('/')
        .expect(200)
        .end(function(err, res){
            expect(err).toBeFalsy()
            console.log(res.text)
            var $ = cheerio.load(res.text)
            expect($('h1').first().text()).toBe("C H I L L")
            done()
        })
})