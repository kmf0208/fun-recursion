const {freezeObj, analyzeArray} = require("../recursionAdvance.js");


// 
//
// 

describe("freezeObj for arrays", () => {
    test("should freeze all elements of a one level array was passed to the function", () => {
        // arrange 
        let input = [1 , 2];
        let output = [1, 2];
        //act 
        // freezeObj(input[0]);
        freezeObj(input);
        input[0] = 2;
        //assert
        expect(input[0]).toEqual(output[0]);
    })
    test("should freeze all elements of a 2 levels array", () => {
        // arrange 
        let input = ["carrot", ["car", "boat", "plane"]];
        let output = ["carrot", ["car", "boat", "plane"]];
        //act 
        freezeObj(input);
        input[0] = 1;
        input[1][0] = 5;
        // assert
        expect(input).toEqual(output);
    })
    test("should freeze all elements if an any number if levels array", () => {
        // arrange 
        let input = ["carrot", ["car", "boat", "plane", ["car", "boat", "plane", ["car", "boat", "plane"]]]];
        let output = ["carrot", ["car", "boat", "plane", ["car", "boat", "plane", ["car", "boat", "plane"]]]];
        //act 
        freezeObj(input);
        input[0] = 1;
        input[1][0] = 5;
        input[1][3][0] = 5;
        input[1][3][3][1] = 100;
        // assert
        expect(input).toEqual(output);
        
    })
})
describe("freezeObj for objects", () => {
    test("should freeze all elements one level object", () => {
        // arrange 
        let input = {name: "Ahmed", Age: 42, career: "Doctor"};
        let output = {name: "Ahmed", Age: 42, career: "Doctor"};
        //act 
        // freezeObj(input[0]);
        freezeObj(input);
        input.name = "Omar";
        input.Age = 13;
        //assert
        expect(input.name).toEqual(output.name);
        expect(input.Age).toEqual(output.Age);

    })
    test("should freeze all elements of multi levels object", () => {
        // arrange 
        let input = {name: {firstName: "Fathi", lastName: "Bosh3aa"}, Age: 42, career: {main: "Doctor", secondary: "Delivery"}};
        let output = {name: {firstName: "Fathi", lastName: "Bosh3aa"}, Age: 42, career: {main: "Doctor", secondary: "Delivery"}};
        //act 
        // freezeObj(input[0]);
        freezeObj(input);
        input.name.firstName = "Omar";
        input.Age = 13;
        input.career.secondary = "plumber"
        //assert
        expect(input.name.firstName).toEqual(output.name.firstName);
        expect(input.career.secondary).toEqual(output.career.secondary);

    })
    
})



describe("analyzeArray", () => {
    test.only("test for one level array", () => {
    // arrange
    const ourArr = ["Ali", "Fathi", "Omar", "Ahmed"];
    const ourStr = "northcoder";
    const consoleSpy = jest.spyOn(console, 'log');
    //act
    analyzeArray(ourStr, ourArr);
    //assert 
    expect(consoleSpy).toHaveBeenCalledWith("hello");

    })
})












// describe("", () => {
//     test("", () => {
        
//     })
// })