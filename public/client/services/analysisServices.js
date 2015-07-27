// Socket helper functions
angular.module('tokki')
  .factory('AnalysisServices', function($http) {

  // var sessions = {
  //   sessionId:{
  //     id: '',
  //     url: '#/api/'
  //   }
  // };

  // Sends a request of all sessions from a host
  // Receives the session IDs, start times
  // Expected from hostHistoryView
  var sessionHistory = function(cb) {
    return $http({
      method: 'GET',
      //Call to Server, who has DB methods
      url: '/host/old'
    })
    .then(function(resp) {
      console.log("SessionHistory called");
      // Historical data pulled from server via db
      cb(resp.data);
    });
  };

  //Sends a request of a specific session from a host
  //Recieves detailed vote average vs time data
  //Expected from hostAnalysisView
  var sessionAnalysis = function(sessionId, cb){
    return $http({
      method: 'GET',
      url: '/hostAnalysisView/'
      //+ sessionId
    })
    .then(function(resp){
      console.log("SessionAnalysis called");
      //DBUtils.getSessionFromDb(sessionInfo, cb)
      session.data = resp.data;
      cb(resp.data);
    });
  };


  return {
    sessionHistory: sessionHistory,
    sessionAnalysis: sessionAnalysis
  };

});
