(function () {
	'use strict';
	
    angular.module('app', ['ngRoute'])
    	.config(function($routeProvider) {
    	$routeProvider
    	.when('/', {
    		controller: 'BooksController',
    		templateUrl: 'views/books.html',
    		controllerAs: 'vm'
    	})
    	.when('/books/details/:id',{
    		controller: 'BooksController',
    		templateUrl: 'views/books-details.html',
    		controllerAs: 'vm'   		
    	})
    	.when('/books/add',{
    		controller: 'BooksController',
    		templateUrl: 'views/add-book.html',
    		controllerAs: 'vm'   		
    	})
    	.when('/books/edit/:id',{
    		controller: 'BooksController',
    		templateUrl: 'views/book-edit.html',
    		controllerAs: 'vm'    		
    	})
    	.otherwise({
    		redirectTo: '/'
    	});
    })
})();	