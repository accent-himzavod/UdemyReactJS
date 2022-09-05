'use strict';
//Ex.17=================================================
function amountOfPages(summary){
    let str = "";
    for (let i=1; i <= summary; i++){
        str += i;
        if (str.length == summary){return i;}
    }    
}

console.log(amountOfPages(25));
//Ex.18=================================================
function isPangram(string) {
    let abcStr = "abcdefghijklmnopqrstuvwxyz";
    let arr = [...string.toLowerCase().split(" ").join("")];
    let sset = new Set(arr.sort());
    arr = [...sset];    

    return abcStr == arr.join("");
    // return newStr;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'));
//Ex.19

function deepCount(a){

}