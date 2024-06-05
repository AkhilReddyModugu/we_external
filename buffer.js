const buf1= Buffer.alloc(10);
const buf2= Buffer.alloc(10,1);
const buf3= Buffer.allocUnsafe(10);
const buf4= Buffer.from([1,2,3]);

console.log(buf1);
console.log(buf2);
console.log(buf3);
console.log(buf4);

const buffer1 = Buffer.from("abc");
const buffer2 = Buffer.from("def");

console.log(buffer1);
console.log(buffer2);
console.log(buffer1.compare(buffer2));
console.log(buffer1.toString());
console.log(buffer2.toString()); 