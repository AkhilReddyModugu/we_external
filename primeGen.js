function primeGenerator(limit){
    function isPrime(n){
        if(n <= 1) return false;
        if(n<=3) return true;
        for(let i=2;i<n;i++)
            if(n%i==0)
                return false;
        return true;
    }
    for(let i=2;i<=limit;i++){
        if(isPrime(i))
            yield i;
    }
}

for(let prime of primeGenerator(50)){
    console.log(prime);
}