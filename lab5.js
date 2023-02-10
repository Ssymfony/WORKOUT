
let input = 'DDADSADASDAAADS';

let obj = input.split('').reduce((o, v, i) => { o[v] = v; return o; }, {});
let arrUnique = Object.keys(obj);
let output = arrUnique.join('')


console.log('input: ' + input);
console.log('output: ' + output);