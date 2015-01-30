
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
        expect(isPositive(3)).toBe(true);
        expect(isPositive(1)).toBe(true);
        expect(isPositive(0)).toBe(false);
        expect(isPositive(-1)).toBe(false);
        expect(isPositive(-2)).toBe(false);
    });

    it('should check if it is a valid letter grade', function(){
        expect(isValidGrade("A")).toBe(true);
        expect(isValidGrade("a")).toBe(true);
        expect(isValidGrade("B")).toBe(true);
        expect(isValidGrade("b")).toBe(true);
        expect(isValidGrade("C")).toBe(true);
        expect(isValidGrade("c")).toBe(true);
        expect(isValidGrade("D")).toBe(true);
        expect(isValidGrade("d")).toBe(true);
        expect(isValidGrade("F")).toBe(true);
        expect(isValidGrade("f")).toBe(true);
        expect(isValidGrade("E")).toBe(false);
        expect(isValidGrade("e")).toBe(false);
        expect(isValidGrade("flubber")).toBe(false);
        expect(isValidGrade(5)).toBe(false);


    });



});

