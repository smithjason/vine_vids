app = angular.module('vineviewer', []);

app.controller('Vineviewer', function($scope, videoFactory){
  $scope.popularVines = {};
  videoFactory.getVines().success(function(data){
    $scope.popularVines = data;
  })


});

app.factory('videoFactory', function($http){
  return {
    getVines: function(){
      return $http.get("/getvines")
    }
  };
});
