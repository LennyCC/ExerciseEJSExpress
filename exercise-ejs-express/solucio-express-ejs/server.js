// OUR "BBDD" 
var mascots = [
    { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
    { name: 'Tux', organization: "Linux", birth_year: 1996},
    { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
];

// load the things we need
var express = require('express');
var app = express();


// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
// parse url-encoded params
app.use(express.urlencoded({extended: false}))

// index page 
app.get('/', function(req, res) {

    var tagline = "No programming concept is complete without a cute animal mascot.";

    res.render('pages/index', {
        mascots: mascots,
        tagline: tagline
    });
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

// add mascot
app.get('/add-mascot', function(req, res) {
    res.render('pages/add-mascot');
});

app.post('/add-mascot', function(req, res) {
    const name = req.body.name;
    const organization = req.body.organization;
    const year = req.body.year;

   mascots.push({
       name: name,
       organization: organization,
       birth_year: year
   });

   res.render('/')
});


app.listen(8080);
console.log('8080 is the magic port');
