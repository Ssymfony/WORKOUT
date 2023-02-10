//let array = [
  //  [1,4,5],
    //[1,3,4],
    //[2,6]
//];
//let lol = array.flat();
//console.log(lol.sort());

let array = [
   [1,4,5],
    [1,3,4],
    [2,6]
];
let result = array.reduce(function(a,b){
   return a.concat(b);
});
console.log(result.sort());