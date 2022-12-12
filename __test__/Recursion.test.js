const {sum, reverseString} = require("../Recursion.js");

// 
describe("sum", () => {
    test("Implement a function that sums the integers 1 through n.", () => {
        expect(sum(1)).toBe(1);
        expect(sum(2)).toBe(3);
        expect(sum(5)).toBe(15);
    })
})
describe("reverseString", () => {
    test("if str with one character, it returns that character", () => {
        expect(reverseString("e")).toBe("e");
    })
    test("it returns the reverse of a string", () => {
        expect(reverseString("Hello")).toBe("olleH");
        expect(reverseString("yes")).toBe("sey");
    })
})











// describe("", () => {
//     test("", () => {
        
//     })
// })