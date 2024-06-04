function* fibGenerator(n){
    let [f,s]=[0,1];
    for(let i=1;i<n;i++){
        yield f;
        [f,s]=[s,f+s];
    }
}

console.log('Fibonacci Sequence:');
for(let fib of fibGenerator(10)){
    console.log(fib);
}