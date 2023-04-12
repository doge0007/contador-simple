let count = 0;

function disminuir() {
    count--;
    document.getElementById('mostrarNumero').innerHTML = count; 
    
    if(count == 0) {
        document.getElementById('mostrarNumero').style.color = "black";
         } else if(count < 0) {
            document.getElementById('mostrarNumero').style.color = "red";
         }
   
}

function resetear() {
    count = 0;
    document.getElementById('mostrarNumero').innerHTML = count;  
    document.getElementById('mostrarNumero').style.color = "black";
    
}
function aumentar() {
    count++;
    document.getElementById('mostrarNumero').innerHTML = count;  
    if(count == 0 ) {
    document.getElementById('mostrarNumero').style.color = "black";
     } else if(count > 0) {
        document.getElementById('mostrarNumero').style.color = "green";
     }
}