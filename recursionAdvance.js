function freezeObj(ourObj){
    Object.freeze(ourObj);
    
if (Array.isArray(ourObj)){
for (let i = 0; i < ourObj.length; i++){
     if (Array.isArray(ourObj[i])){
    freezeObj(ourObj[i]);
 }
}
} else if (typeof ourObj === "object" && !Array.isArray(ourObj)){
    const ourProperties = Object.keys(ourObj);
    for (let i = 0; i < ourProperties.length; i++){
        if (typeof ourObj[ourProperties[i]] === "object" ){
       freezeObj(ourObj[ourProperties[i]]);
        }
    } 
}
return ourObj;
}
/////////////

function analyzeArray(str, arr){
   console.log("hello");
}





module.exports = {freezeObj, analyzeArray};