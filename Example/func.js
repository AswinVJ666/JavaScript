let age = window.prompt("Enter Your Age ");


ageChecker(age);

function ageChecker(a){
    if( a>= 18 && a<=30) {
         document.getElementById('display').innerHTML = "You are an adult";
    }
    else if(a == 17){
        document.getElementById('display').innerHTML = "You will be  an adult in an year";
    }
    else if(a >30 && a<80){
        document.getElementById('display').innerHTML = "You are a senior";
    }
    else if(a<17 && a>0){
        document.getElementById('display').innerHTML = "You are a kid";
    }
    else if (a>=80){
        document.getElementById('display').innerHTML = "You are very old";
    }
    else{
        document.getElementById('display').innerHTML = "You are non existant";
    }
}