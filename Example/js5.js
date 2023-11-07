const smb = window.prompt('enter the symbol');
const row = window.prompt('enter the no of rows');
const col = window.prompt('enter the no of columns');
for(let i = 0 ;i <= row - 1; i += 1){
    for(let j = 0 ; j <= col - 1; j += 1 ){
        document.getElementById('display').innerHTML += smb ;
    
    }
    document.getElementById('display').innerHTML += '<br>' ;   
}