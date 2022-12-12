function sum(num){
    if (num === 1){
        return num;
    }

    return num + sum(num - 1);
}
// *****
// function reverseString(str){
//  let splittedStr = str.split("");
    
// if (splittedStr  === 1){
//     return str;
// }

// return splittedStr.pop() + reverseString(splittedStr.join(""));

// }
module.exports = sum;

console.log(reverseString("yes"));
