function ObjectiveNewController(ObjectiveService, $state, Config) {
  var ctrl = this;
  
  ctrl.$onInit = function () {
    ctrl.tags = Config.objectiveTags;
    ctrl.clearObjective();
  };

  ctrl.saveObjective = function () {
    console.log("Saving ");
    var objective = {
      title: ctrl.objective.title,
      tag: ctrl.objective.tag.value,
      keyresults: ctrl.objective.keyresults.split(',')
    }
    return ObjectiveService
      .createNewObjective(objective)
      .then(function (objective) {
        $state.go('objective');
      });
  };
  
  ctrl.clearObjective = function() {
    ctrl.objective = {
      title: '',
      tag: ctrl.tags[0],
      keyresults: '',
    };
  }
}

angular
  .module('components.objective')
  .controller('ObjectiveNewController', ObjectiveNewController);
