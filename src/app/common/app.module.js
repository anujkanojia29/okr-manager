angular
  .module('common', [
    'ui.router',
    'angular-loading-bar'
  ])
  .constant('Config', {
    "objectiveTags": [{
      label: 'Company',
      icon: 'people',
      value: 'company'
    }, {
      label: 'Sales',
      icon: 'child_care',
      value: 'sales'
    }, {
      label: 'Finance',
      icon: 'accessibility',
      value: 'finance'
    }, {
      label: 'Marketing',
      icon: 'remove_red_eye',
      value: 'marketing'
    }]
  })
  .run(function($transitions, cfpLoadingBar) {
    $transitions.onStart({}, cfpLoadingBar.start);
    $transitions.onSuccess({}, cfpLoadingBar.complete);

  });
