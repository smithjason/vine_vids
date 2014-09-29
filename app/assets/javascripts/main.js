app = angular.module('vineviewer', []);

app.controller('Vineviewer', function($scope, $sce, videoFactory){
  var popularVines = {};
  var currentVideoCounter = 0;
  $scope.currentVideoUrl = "";

  videoFactory.getVines().success(function(data){
    popularVines = data.data.records;
    // debugger
    var url = popularVines[0].videoUrl;
    $scope.currentVideoUrl = $sce.trustAsResourceUrl(url);

  });

  $scope.nextVid = function(){
    currentVideoCounter += 1;
    console.log(currentVideoCounter)
    var url = popularVines[currentVideoCounter].videoUrl;
    // debugger
    $scope.currentVideoUrl = $sce.trustAsResourceUrl(url);
  }

});

app.factory('videoFactory', function($http){
  return {
    getVines: function(){
      return $http
        .get("/getvines");
    }
  };
});
