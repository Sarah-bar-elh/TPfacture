
function facture(){
    // Calcul pour la première ligne
    var a = document.getElementById("prix1").value;
    var b = document.getElementById("quantite1").value;
    var c = a * b;
    document.getElementById("resultat1").textContent = c || 0;  

    // Calcul pour la deuxième ligne
    var d = document.getElementById("prix2").value;
    var e = document.getElementById("quantite2").value;
    var f = d * e;
    document.getElementById("resultat2").textContent = f || 0; 
}

function reinitialiser() {
  
    document.querySelectorAll('input[type="text"], input[type="number"]').forEach(input => input.value = '');
  
    document.querySelectorAll('.result').forEach(cell => cell.textContent = '0');
}
