var objectiveNew = {
  templateUrl: './objective-new.html',
  controller: 'ObjectiveNewController'
};

angular
  .module('components.objective')
  .component('objectiveNew', objectiveNew)
  .config(function ($stateProvider) {
    $stateProvider
      .state('new', {
        parent: 'app',
        url: '/new',
        component: 'objectiveNew',
      });
  });
