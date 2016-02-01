'use strict';

/* Controllers */

var MyWebsite = angular.module('MyWebsite', []);

MyWebsite.controller('selection', function($scope){
	$scope.items = ['Home', 'About', 'Projects', 'Contact'];
	$scope.page = "Home";

	$scope.projects = [
    	{name:'Codility Solutions', info:'I am currently in the process of making solutions to the problems in the Lesson section of Codility. These solutions are currently only in C.'},
    	{name:'Transactional Code Snippets', info:'This is a general repository for useful code for creating transactions and managing them.'},
    	{name:'Locks', info:'Various software lock implementations including some lockless algorithms such as the Bakery lock and McS lock aswell.'}
  	];
});