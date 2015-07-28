angular.module('tokki')
  .controller('AnalysisController', ['$scope', 'AnalysisServices', function($scope, AnalysisServices) {

  $scope.rows = [];


  // May use later when recieved from auth
  // to automatically select the host's sessions
  $scope.selectedSessionId = null;
  $scope.currHostId = null;

  $scope.init = function(currHostId) {
    AnalysisServices.sessionHistory( currHostId, function(sessionId, data) {
      console.log('Populated data from host: ' + currHostId);
    });
  };

  // Pulls sessions and summary data from DB for analysis based on user
  $scope.sessionHistory = function(){
    console.log("Accessing history...");
    AnalysisServices.sessionHistory(function(data) {
      $scope.sessions = data;
    });
  };

  // Presents analysis for a specific session
  $scope.sessionAnalysis = function(selectedSession){
    console.log("Session Analysis of ", selectedSession);
    $scope.selectedSessionId = selectedSession;
    AnalysisServices.sessionAnalysis(selectedSession);
  };

  $scope.sessionHistory();

}]);
