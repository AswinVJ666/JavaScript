document.getElementById("submitbutton").onclick = function() {
    let a ;
    let b ;
    let c ;
    a = document.getElementById("ainput").value;
    a  = Number(a);
    console.log(a);
    b = document.getElementById("binput").value;
    b  = Number(b);
    console.log(b);    
    c = Math.sqrt(Math.pow(a,2)+ Math.pow(b,2));
    console.log(c);     
    document.getElementById("clabel").innerHTML = "The hypotenuse is " + c;
}