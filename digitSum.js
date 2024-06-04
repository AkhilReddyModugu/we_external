function* digitSum(n){
    while(n>0){
        yield n%10;
        n= Math.floor(n/10);
    }
}

console.log('Sum of Digits:');
let sum=0;
for(let rem of digitSum(12345)){
    sum+=rem;
}
console.log(sum);