function ObjectiveDetailController(ObjectiveService, $state) {
  var ctrl = this;  
  ctrl.deleteObjective = function(objectitve) {
      if(objectitve) {
        console.log(objectitve.$id);
        ObjectiveService.getObjectiveById(objectitve.$id).$loaded().then(function(result) {
            ObjectiveService.deleteObjective(result).then(function(){
                $state.reload();
            })
        });
      }
  }
}

angular
  .module("components.objective")
  .controller("ObjectiveDetailController", ObjectiveDetailController);
