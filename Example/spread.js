let l1 = ['a','b','c'];
let l2 = ['d','e','f'];

console.log(...l1);  //  ... is the spread  operator// 
console.log(...l2);

l1.push(...l2);
console.log(...l1);
