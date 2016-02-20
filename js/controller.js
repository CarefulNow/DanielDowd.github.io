'use strict';

var myWebsite = angular.module('myWebsite', []);

myWebsite.controller('PanelController', ['$scope', function ($scope) {
  $scope.tab = 1;
  $scope.pages = ['Home', 'About', 'Projects', 'Contact'];
  $scope.currpage = $scope.pages[0];

    $scope.selectTab = function(setTab){
      $scope.tab = setTab;
      $scope.currpage = $scope.pages[$scope.tab - 1];
    };

    $scope.isSelected = function(checkTab){
      return $scope.tab === checkTab;
    };

  $scope.projects = [
      {name:'Codility Solutions', info:'I am currently in the process of making solutions to the problems in the Lesson section of Codility. These solutions are currently only in C.'},
      {name:'Transactional Code Snippets', info:'This is a general repository for useful code for creating transactions and managing them.'},
      {name:'Locks', info:'Various software lock implementations including some lockless algorithms such as the Bakery lock and McS lock aswell.'}
    ];
  
}]);
