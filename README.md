# jest-test-practice

I created this repository to practice jest test programming.

Matcher	Description
expect(x).toEqual(y);	Compares objects or primitives x and y and passes if they are equivalent
expect(x).toBe(y);	Compares objects or primitives x and y and passes if they are the same object
expect(x).toMatch(pattern);	Compares x to some string or regular expression pattern and passes if they match
expect(x).toBeDefined();	Passes if x is not undefined (expects actual value to be defined).
expect(x).toBeUndefined();	Passes if x is undefined
expect(x).toBeNull();	Passes if x is null
expect(x).toBeTruthy();	Passes if x evaluates to true
expect(x).toBeFalsy();	Passes if x evaluates to false
expect(x).toContain(y);	Passes if array or string x contains y
expect(x).toBeLessThan(y);	Passes if x is less than y
expect(x).toBeGreaterThan(y);	Passes if x is greater than y
expect(() => {fn(); }).toThrow(e);	Passes if function fn throws exception e when executed
