function *factorialGenerator(n){
    let res=1;
    for(let i=1;i<=n;i++){
        res*=i;
        yield res;
    }
}

function *generatorFactorials(n){
    yield "Start computing factorials";
    yield *factorialGenerator(n);
    yield "End computing factorials";
}

for(let i of generatorFactorials(10)){
    console.log(i);
}