var app = {
    templateUrl: './app.html',
    controller: 'AppController'
  };

angular
  .module('common')
  .component('app', app)
  .config(function ($stateProvider) {
    $stateProvider
      .state('app', {
        redirectTo: 'objective',
        url: '/app',
        data: {
          requiredAuth: true
        },
        component: 'app'
      })
  });
