function RegisterController(AuthService, $state) {
    var ctrl = this;
    ctrl.$onInit = function() {
        ctrl.error = '';
        ctrl.user = {
            email: '',
            password: ''
        }
    }
    ctrl.createUser = function(event) {
        ctrl.error = '';
        AuthService.register(event.user)
                    .then(function(user) {
                        console.log('User created successfully');
                        $state.go('app');
                    },
                    function(error) {
                        ctrl.error = error.message;
                    })
    }
}

angular.module('components.auth')
        .controller('RegisterController', RegisterController);