//= wrapped
//= require /angular/angular
//= require /myapp/core/myapp.core
//= require /myapp/index/myapp.index
//= require /myapp/hello/myapp.hello

angular.module("myapp", [
    "ngRoute",
    "myapp.core",
    "myapp.index",
    "myapp.hello"
]);
