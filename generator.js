function *factGenerator(n){
    let res=1;
    for(let i=1;i<=n;i++){
        res*=i;
        yield res;
    }
}

console.log("Factorial:");
for(const fact of factGenerator(6)){
    console.log(fact);
}