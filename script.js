
function facture(){
    // Calcul pour la première ligne
    var a = document.getElementById("prix1").value;
    var b = document.getElementById("quantite1").value;
    var c = a * b;
    document.getElementById("resultat1").textContent = c || 0;  // Affiche 0 si vide

    // Calcul pour la deuxième ligne
    var d = document.getElementById("prix2").value;
    var e = document.getElementById("quantite2").value;
    var f = d * e;
    document.getElementById("resultat2").textContent = f || 0;  

       // Calcul pour la  troisième ligne
    var d = document.getElementById("prix3").value;
    var e = document.getElementById("quantite3").value;
    var f = d * e;
    document.getElementById("resultat3").textContent = f || 0;  
}

function somme() {
    var a = parseFloat(document.getElementById("resultat1").textContent) || 0;
    var b = parseFloat(document.getElementById("resultat2").textContent) || 0;
    var e = parseFloat(document.getElementById("resultat3").textContent) || 0;
    var f = a + b;

    document.getElementById("resultat4").textContent = f.toFixed(2);
}
 
function reinitialiser() {
    // Réinitialisation de tous les champs de saisie
    document.querySelectorAll('input[type="text"], input[type="number"]').forEach(input => input.value = '');
    // Réinitialisation de tous les champs de résultat
    document.querySelectorAll('.result').forEach(cell => cell.textContent = '0');
}
