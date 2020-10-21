function ObjectiveService(AuthService, $firebaseRef, $firebaseArray, $firebaseObject) {
  var ref = $firebaseRef.objectives;
  var uid = AuthService.getUser().uid;
  return {
    createNewObjective: function (objective) {
      return $firebaseArray(ref.child(uid)).$add(objective);
    },
    getObjectiveById: function (id) {
      return $firebaseObject(ref.child(uid).child(id));
    },
    getObjectives: function () {
      return $firebaseArray(ref.child(uid));
    },
    
    deleteObjective: function (objective) {
        return objective.$remove();
      }
  };
}

angular
  .module('components.objective')
  .factory('ObjectiveService', ObjectiveService);
