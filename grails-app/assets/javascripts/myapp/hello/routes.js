/**
 * Created by Kulsoom on 26/01/2017.
 */
angular.module("myapp.hello")
    .config(function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: "/myapp/hello/DisplayHello.html",
            controller: "HelloController as ctrl"
        })
    });