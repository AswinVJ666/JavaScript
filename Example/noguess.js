const guess = Math.floor(Math.random()*10 +1);
console.log(guess);
let count = 0;

document.getElementById('submitbuton').onclick = function(){
    userin = document.getElementById('inputbox').value ;
    count +=1;;
    if (userin == guess){
        alert(`CONGRATULATIONS
        ${userin}is the Right Answer. You have used ${count} guesses`);
        count = 0; 
        document.getElementById('inputbox').value ="" ;

    }
    else{
        alert(`${userin}is the Wrong Answer. You have used ${count} guesses`);
        document.getElementById('inputbox').value = "";
    }
}