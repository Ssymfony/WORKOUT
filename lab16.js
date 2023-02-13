function isPrime(num){
    for (let i = 2, max = Math.sqrt(num); i <= max; i++){  //Koren chisla Math.sqrt(num)
        if (num % i === 0){
            return false;
        }
    }
    return num > 1;
}
function getPrimes(num){
    const primes = [];

    for (let i = 2; i <= num; i++){
        if (isPrime(i)){
            primes.push(i);
        }
    }
    return primes;
}

console.log(getPrimes(200));