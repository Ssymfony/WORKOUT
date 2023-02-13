
function fibonacciShort(num){
    let a = 1,
        b = 1;
  for (let i = 3; i <= num; i++){
      [a,b] = [b,a + b];  //присваеваем значение из а в б
  }
    return b;
}

console.log(fibonacciShort(12));