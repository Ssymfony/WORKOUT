
//split -- разбивает строку на символы;
// reverse -- переворачивает массив;
// join -- собирает строку из массива.
let str ='дим';
let str2='дим';
str = str.replace(/.$/, '');
function reverseString(lol) {
    return lol.split("").reverse().join("");
}
let reverseRedy = reverseString(str);
console.log(str2+ reverseRedy);

let str3 ='an';
let str4='an';
str3 = str3.replace(/.$/, '');

let reverseRedy2 = reverseString(str3);
console.log(str4+ reverseRedy2);

let str5 ='рота';
let str6='рота';
str5 = str5.replace(/.$/, '');

let reverseRedy3 = reverseString(str5);
console.log(str6+ reverseRedy3);


