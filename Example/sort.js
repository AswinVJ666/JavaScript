let fruits = ['apple','orange','pineapple'];
fruits = fruits.sort();
let vegetables = ['carrot','onion','eggplant'];
vegetables = vegetables.sort();
let colours = ['blue','red','black'];
colours = colours.sort();

let items = [fruits,vegetables,colours];


for(let i of items){
    for(let j of i){
        console.log(j);
    }
}