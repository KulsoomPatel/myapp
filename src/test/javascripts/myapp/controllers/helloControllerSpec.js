describe("myapp module", function() {
    var scope;

    beforeEach(angular.mock.module("myapp", function() {
    }));

    beforeEach(angular.mock.inject(function($rootScope) {
        scope = $rootScope.$new();
    }));

    describe("HelloController", function() {

        var ctrl;

        beforeEach(angular.mock.inject(function($controller) {
            ctrl = $controller("HelloController", {});
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});
