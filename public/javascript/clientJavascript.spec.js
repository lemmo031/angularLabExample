
//Just some example testing.
describe('testing basic functions', function(){
    it('should return the correct string length', function(){
        expect(testStringLength("kittens")).toEqual(7);
    });

    it('returnKittens should return kittens', function(){
        expect(returnKittens()).toBe("kittens");
    });

});

describe('testing user input validation', function(){
    it('should check if it is a valid amount of credits', function(){
        expect(isNonNegative(3)).toBe(true);
        expect(isNonNegative(0)).toBe(true);
        expect(isNonNegative(-1)).toBe(false);
        expect(isNonNegative(-2)).toBe(false);
    });



});

