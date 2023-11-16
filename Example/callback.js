let a = 20;
let b = 20;

sum(a,b,displayConsole);



function sum(x,y,disp){
    let result = x+y ; 
    disp(result);      //callback function//
    return result;
}
function displayConsole(y){
    console.log(y);
}