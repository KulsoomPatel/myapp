/**
 * Created by Kulsoom on 26/01/2017.
 */
angular.module("myapp.hello")
.controller("HelloController", HelloController);

function HelloController(HelloServiceFactory) {

    var vm = this;

    vm.checkController = "Controller Check";

 HelloServiceFactory.get().then(function(response) {

        vm.testMessage = response.data;
    });
}