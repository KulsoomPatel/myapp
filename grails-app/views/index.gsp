<!doctype html>
<html>
<head>
    <asset:stylesheet src="bootstrap/bootstrap.css"/>

</head>

<body>

<div class="container-fluid" ng-app="myapp">

    <div class="page-header">
        <h1 class="text-center">Test Title <small>Test subtitle</small></h1>
    </div>

    <div ng-view>

    </div>

</div>

<asset:javascript src="myapp/myapp"/>

</body>
</html>