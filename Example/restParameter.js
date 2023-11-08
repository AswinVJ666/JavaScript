let a = 1;
let b = 10;
let c = 11;
let d = 100;
let e = 31;
let f = 21;
let g = 10;

result = sum(a,b,c,d,e,f,g);
console.log(result);

function sum(...x){
    let  count = 0;
    for(let i of x){
        count += i
    }
    return count;
}