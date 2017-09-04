var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
var port = 3000;

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Genre = require('./modules/genre');
Book = require('./modules/book');


// Connect to MongoDB
mongoose.connect('mongodb://localhost/bookstore');

var db = mongoose.connection;

app.get('/', function(req, res){

});

app.get('/api/genres', function(req, res){
	Genre.getGenres(function(err, genres){
		if(err){
			throw err;
		}else{
			res.json(genres);
		}
	});
});

app.post('/api/genres', function(req, res){
	var genre = req.body;
	Genre.addGenres(genre, function(err, genres){
		if(err){
			throw err;
		}else{
			res.json(genres);
		}
	});
});

app.put('/api/genres/:_id', function(req, res){
	var id = req.params._id;
	var genre = req.body;
	Genre.updateGenre(id, genre, {}, function(err, genres){
		if(err){
			throw err;
		}else{
			res.json(genres);
		}
	});
});

app.delete('/api/genres/:_id', function(req, res){
	var id = req.params._id;
	Genre.deleteGenre(id, function(err, genres){
		if(err){
			throw err;
		}else{
			res.json(genres);
		}
	});
});

app.get('/api/books', function(req, res){
	Book.getBooks(function(err, books){
		if(err){
			throw err;
		}else{
			res.json(books);
		}
	});
});

app.get('/api/book/:_id', function(req, res){
	var id = req.params._id;
	Book.getBookById(id, function(err, book){
		if(err){
			throw err;
		}else{
			res.send(book);
		}
	});
});

app.post('/api/books', function(req, res){
	var book = req.body;
	Book.addBook(book, function(err, books){
		if(err){
			throw err;
		}else{
			res.json(books);
		}
	});
});

app.put('/api/books/:_id', function(req, res){
	var id = req.params._id;
	var book = req.body;
	Book.updateBook(id, book, {}, function(err, books){
		if(err){
			throw err;
		}else{
			res.json(books);
		}
	});
});

app.delete('/api/books/:_id', function(req, res){
	var id = req.params._id;
	Book.deleteBook(id, function(err, books){
		if(err){
			throw err;
		}else{
			res.json(books);
		}
	});
});

app.listen(port, function(){
	console.log('Running at port: '+ port);
})