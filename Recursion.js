function sum(num){
    if (num === 1){
        return num;
    }

    return num + sum(num - 1);
}
// *****
function reverseString(str){
    if (str.length === 1){
        return str;
    }
return str[str.length - 1] + reverseString(str.substring(0, str.length - 1));

}
module.exports = {sum,
reverseString
};
