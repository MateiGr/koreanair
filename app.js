var express = require('express');
var app = express();
const bodyParser = require('body-parser');


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public/assets/'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("/public/assets/"));






app.get('/team.ejs', async function (req, res) {
    
    res.render('pages/team')
 });
 app.get('/index.ejs', async function (req, res) {
    res.render('pages/index')
 });

 app.get('/fleet.ejs', async function (req, res) {
    
    res.render('pages/fleet')
 });
 














app.get('/challenges', async function (req, res) {
 
});





app.get('/map', (req, res) => {

    res.render('pages/map');
});

app.get('/vabot', (req, res) => {

    res.render('pages/vabot');
});

app.get('/test', (req, res) => {

    res.render('pages/test');
});
// Define the route to handle the flight plan generation
app.post('/map', (req, res) => {
    res.render('pages/map')
});

app.get('/fetch-atis', async (req, res) => {
 
  });

app.listen(3149);
console.log('Server is listening on port 3149');
