angular.module('myApp', ['ngRoute', 'ngAnimate'])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/details/:itemID', {
        templateUrl: 'views/details.html',
        controller: 'detailsCtrl'
      })
    .otherwise( {redirectTo: '/'} )
  })

    // use the HTML5 History API
    // $locationProvider.html5Mode(true)


  
    .controller ('coworkerListCtrl', function($scope, $http) {
        $http 
            .get('/data/coworkers.json')
            .then(({data}) => {$scope.coworkers = data})
    
        console.log ($scope.coworkers)
    } )

  .controller('detailsCtrl', function($scope, $routeParams, $http) {

    $scope.itemID = $routeParams.itemID

    $http
      .get('/data/coworkers.json')
      .then(function(res){
        $scope.coworker = res.data.filter(function(row) {
          return row.id === $scope.itemID // Filter out the appropriate one
        })[0]
        console.log($scope.coworker)
      })

  })
