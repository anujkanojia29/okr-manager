var objectiveDetail = {
  bindings: {
      objectives: '<',
      params: '<'
  },
  templateUrl: "./objective-detail.html",
  controller: "ObjectiveDetailController",
};

angular
  .module("components.objective")
  .component("objectiveDetail", objectiveDetail)
  .config(function ($stateProvider) {
    $stateProvider.state("objective", {
      parent: "app",
      url: "/objective?tag",
      params: {
        tag: 'all'
      },
      component: "objectiveDetail",
      resolve: {
        objectives: function(ObjectiveService) {
            return ObjectiveService.getObjectives().$loaded();
        },
        params: function($transition$) {
            return $transition$.params()
        }

      }
    });
  });
