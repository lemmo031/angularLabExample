'use strict';

//=== Testing mainCtrl =============================================
describe('Testing controller: mainCtrl', function(){

    // load the controller's module
    beforeEach(module('mainApp'));

    var mainCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        mainCtrl = $controller('mainCtrl', {
            $scope: scope
        });
    }));

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });

    describe("testing data functionality: ", function(){
        it("should contain some data by default", function(){
            expect(scope.data.length > 0).toEqual(true);
        });

        it("should be able to remove an item from the list", function(){
           var initialLength = scope.data.length;
           scope.removeData(1);
           expect(scope.data.length < initialLength).toEqual(true);
        });

        it("should be able to add an item to the list", function(){
            var initialLength = scope.data.length;
            scope.textField = "kittens";
            scope.addData();
            expect(scope.data.length > initialLength).toEqual(true);
        });
    });
});

//=== Testing navbarCtrl ===========================================
describe('Testing controller: navbarCtrl', function(){

    // load the controller's module
    beforeEach(module('mainApp'));

    var mainCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        mainCtrl = $controller('navbarCtrl', {
            $scope: scope
        });
    }));

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });

    it('should contain pages', function(){
      expect(scope.pages.length > 0).toEqual(true);
    });
});

//=== Testing gpaCtrl ===========================================
describe('Testing getColorClass', function(){

    // load the controller's module
    beforeEach(module('mainApp'));

    var mainCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        mainCtrl = $controller('gpaCtrl', {
            $scope: scope
        });
    }));

    it('scores of 3.0 or above should return good', function(){
        expect(scope.getColorClass(4.0)).toEqual("good");
        expect(scope.getColorClass(3.4)).toEqual("good");
        expect(scope.getColorClass(3.0)).toEqual("good");
    });

    it('scores between 2.0 inclusive and 3.0 exclusive should return bad', function(){
        expect(scope.getColorClass(2.9)).toEqual("bad");
        expect(scope.getColorClass(2.5)).toEqual("bad");
        expect(scope.getColorClass(2.0)).toEqual("bad");
    });

    it('scores below 2.0 should return ugly', function(){
        expect(scope.getColorClass(1.9)).toEqual("ugly");
        expect(scope.getColorClass(1.0)).toEqual("ugly");
        expect(scope.getColorClass(0)).toEqual("ugly");
    });
});