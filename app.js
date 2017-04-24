var fortunes = [
"Conquer your fears or they will conquer you.",
"Rivers need springs.",
"Do not fear what you don't know.",
"You will have a pleasant surprise.",
"Whenever possible, keep it simple.",
];

//
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
//set the port
app.set('port', process.env.PORT || 3000);
//serve static content
app.use(express.static('/public'))
//set the handlebars view engine
handlebars.create({ defaultLayout:'main' });
//app.engine('handlebars', handlebars.engine); - this didn't work, second arg needs to be a function
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

//routes
app.get('/', function(req, res) {
res.render('home');
});
app.get('/about', function(req, res) {
var randomFortune =
fortunes[Math.floor(Math.random() * fortunes.length)];
res.render('about', { fortune: randomFortune });
});
//chapter 6 request header route
app.get('/headers', function(req,res){
res.set('Content-Type','text/plain');
var s = '';
for(var name in req.headers) s += name + ': ' + req.headers[name] + '\n';
res.send(s);
});
// 404 catch-all handler (middleware)
app.use(function(req, res, next){
res.status(404);
res.render('404');
});
// 500 error handler (middleware)
app.use(function(err, req, res, next){
console.error(err.stack);
res.status(500);
res.render('500');
});


app.listen(app.get('port'), function(){
console.log( 'Express started on http://localhost:' +
app.get('port') + '; press Ctrl-C to terminate.' );
});