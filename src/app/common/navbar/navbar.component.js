var navbar = {
    bindings: {
      user: '<',
      onLogout: '&'
    },
    templateUrl: './navbar.html'
  };
  
  angular
    .module('common')
    .component('navbar', navbar);
  