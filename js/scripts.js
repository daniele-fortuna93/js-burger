// Creazione variabili
var nomeBurger = document.getElementById('name_burger_input');
var bottoneCalcolo = document.getElementById('calculate');
var ingredienti = document.getElementsByClassName('checked');
var costoBurger = document.getElementById('total');
var codiciSconto = ["123456789", "987654321", "20off"];
var couponUtente = document.getElementById('coupon');

// 1. Funzione al click

bottoneCalcolo.addEventListener('click',
function () {
  // 2. Controllo che il campo nomeBurger non sia vuoto
  if ( nomeBurger.value != "") {
    var somma = 50;
    // 3. Scorro tutti gli ingredienti
    for (var i = 0; i < ingredienti.length; i++) {
      // 4. Controllo se l'ingrediente è flaggato
      if ( ingredienti[i].checked) {
        somma += parseInt(ingredienti[i].value);
      }
    }
    // 5. Applico lo sconto se il codice è esatto
    if ( codiciSconto.includes(coupon.value) ) {
      somma -= somma * 0.2;
    }
  } else {
    alert('Inserisci il nome del panino!');
  }
  // 6. Stampo il costo totale
  costoBurger.innerHTML = somma.toFixed(2);
}
);
