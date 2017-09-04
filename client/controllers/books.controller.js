(function() {
  'use strict';

  angular.module('app')
    .controller('BooksController', BooksController);

  BooksController.$inject = ['$scope', '$window', '$location', '$http', '$routeParams'];

  function BooksController($scope, $window, $location, $http, $routeParams) {
    var vm = this;
    vm.newBook = {};

    vm.getBooks = function() {
      $http.get('/api/books').then(function(resp) {
        vm.books = resp.data;
        console.log('vm.books: ', vm.books);
      }, function(err) {
        console.log('err: ', err);
      });
    }

    vm.getBook = function() {
      var id = $routeParams.id;
      console.log(id);
      $http.get('/api/book/'+id).then(function(resp) {
        vm.book = resp.data;
        console.log('vm.book: ', vm.book);
      }, function(err) {
        console.log('err: ', err);
      });
    }

    vm.addBook = function() {
      console.log(vm.newBook);
      $http.post('/api/books/',vm.newBook).then(function(resp) {
        $window.location.href = '#/books';
      }, function(err) {
        console.log('err: ', err);
      });
    }

    vm.updateBook = function() {
      var id = $routeParams.id;
      console.log(id);
      $http.put('/api/books/'+id, vm.book).then(function(resp) {
        $window.location.href = '#/books'
      }, function(err) {
        console.log('err: ', err);
      });
    }

    vm.removeBook = function(id) {
      console.log(id);
      $http.delete('/api/books/'+id).then(function(resp) {
        $window.location.href = '#/books'
      }, function(err) {
        console.log('err: ', err);
      });
    }

  }
})();