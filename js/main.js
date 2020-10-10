var app = angular.module('unnamedJazzTheory',['ngRoute']);

/**
Config routes
*/
app.config(['$routeProvider', function ($routeProvider){
$routeProvider
// home
.when("/",{templateUrl: "partials/home.html", controller: "PageCtrl"})
//pages
.when("/about",{templateUrl: "partials/about.html", controller: "PageCtrl"})
.when("/tutorials",{templateUrl: "partials/tutorials.html", controller: "PageCtrl"})
.when("/vis",{templateUrl: "partials/vis.html", controller: "PageCtrl"})
// else 404
.otherwise("/404",{templateUrl: "partials/404.html", controller: "PageCtrl"})
}]);

/**
controller
*/
app.controller('PageCtrl',function(/* $scope, $location, $http */){
	console.log("Page Controller reporting for duty");
	$('.carousel').carousel({
		interval: 5000
	});
// Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});



