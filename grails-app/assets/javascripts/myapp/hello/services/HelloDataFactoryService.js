/**
 * Created by Kulsoom on 26/01/2017.
 */

//= wrapped
angular
.module("myapp.hello")
.factory("HelloServiceFactory", HelloServiceFactory);

function HelloServiceFactory($http) {
    return {
        get: function() {
            return $http({method: "GET", url: "hello/index"});
        }
    }
}