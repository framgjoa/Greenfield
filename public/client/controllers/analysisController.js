angular.module('tokki')
  .controller('AnalysisController', ['$scope', 'AnalysisServices', function($scope, AnalysisServices) {

  $scope.rows = [];


  // May use later when recieved from auth
  // to automatically select the host's sessions
  $scope.selectedSessionId = null;
  $scope.currHostId = null;
  $scope.sessionData = null;

  //Not being used currently
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

  // Presents analysis for a specific session. Called on click
  $scope.sessionAnalysis = function(selectedSession){
    $scope.selectedSessionId = selectedSession;
    $scope.sessionData = AnalysisServices.sessionAnalysis(selectedSession);
    console.log("Session Data from ", $scope.selectedSessionId, " : ", $scope.sessionData);
  };

  $scope.sessionHistory();

}]);
