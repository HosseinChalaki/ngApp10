describe('1st tests', () => {
    it('true is true', () => {
        expect(true).toBe(true);
    });
    it('a is 12', ()=>{
        let a = 12;
        expect(a).toBe(12);
    });

    it("works for simple literals and variables", function () {
        var a = 12;
        expect(a).toEqual(12);
    });
    
    it("should work for objects", function () {
        var foo = {
            a: 12,
            b: 34
        };
        var bar = {
            a: 12,
            b: 34
        };
        expect(foo).toEqual(bar);
    });

    it("The 'toBeDefined' matcher compares against `undefined`", function () {
        var a = {
            foo: "foo"
        };
    
        expect(a.foo).toBeDefined();
    });

    it("The 'toThrow' matcher is for testing if a function throws an exception", function () {
        var foo = function () {
            return 1 + 2;
        };
        var bar = function () {
            throw new Error();
            return null;
        };
        var baz = function () {
            throw 'what';
        };
    
        expect(foo).not.toThrow();
        expect(bar).toThrow();
        expect(baz).toThrow('what');
    });


    var foo = function (x, callBack) {
        if (x) {
            callBack();
        }
    };
    
    it("should not call the callBack", function () {
        expect(foo).toBeTruthy();
        foo(false, function () {
            fail("Callback has been called");
        });
    });
});