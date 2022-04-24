// Imports
const express = require('express')
const app = express()
const port = 3000
const https = require('https');

let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view-engine', 'ejs')
app.get('/', function(req, res) {
    res.render('index.ejs');
});
app.get('/aff', function(req, res) {
    res.render('Affirmation.ejs');
});
app.get('/med', function(req, res) {
    res.render('Meditation.ejs');
});
app.get('/ff', function(req, res) {
    res.render('greet.ejs');
});
app.get('')
// Load CSS
app.use(express.static('public'));

app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js')) //if we'll add
app.use('/img', express.static(__dirname + 'public/images'))

console.log("Nya ichi")

const server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})