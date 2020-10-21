angular
  .module('components.auth', [
    'ui.router',
    'firebase'
  ])
  .config(function($firebaseRefProvider) {
    var firebaseConfig = {
      apiKey: "AIzaSyACy5xV-YutDNfTKOFo6m0VfkTMV13empo",
      authDomain: "okr-manager-app.firebaseapp.com",
      databaseURL: "https://okr-manager-app.firebaseio.com",
      projectId: "okr-manager-app",
      storageBucket: "okr-manager-app.appspot.com",
      messagingSenderId: "7839188821",
      appId: "1:7839188821:web:ddb114bc6e7d6c274611dc"
    };

    $firebaseRefProvider
      .registerUrl({
        default: firebaseConfig.databaseURL,
        objectives: firebaseConfig.databaseURL+ '/objectives'
      })
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  })
  .run(function ($transitions, $state, AuthService) {
    $transitions.onStart({
      to: function (state) {
        return !!(state.data && state.data.requiredAuth);
      }
    }, function() {
      return AuthService
        .requireAuthentication()
        .catch(function () {
          return $state.target('auth.login');
        });
    });
    $transitions.onStart({
      to: 'auth.*'
    }, function () {
      if (AuthService.isAuthenticated()) {
        return $state.target('app');
      }
    });
  });