document.getElementById("submitbutton").onclick = function(){
    
    const upiCard = document.getElementById("upi");
    const cardCard = document.getElementById("card");
    if(upiCard.checked){
        
        document.getElementById('message').innerHTML = 'You Have succesfully selected UPI';
    }
    else if(cardCard.checked){
        document.getElementById('message').innerHTML = 'You Have succesfully selected Credit Card';
        
    }
    else{
        document.getElementById("message").innerHTML = "Please select a payment option ";
        
    }
}