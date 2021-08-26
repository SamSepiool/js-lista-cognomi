// 1. chiedi all’utente il cognome
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova


var cognomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli']
console.log(cognomi);

// 1)
var nuovoCognome = prompt('inserisci il tuo cognome');
console.log(nuovoCognome);

// 2)
cognomi.push(nuovoCognome);
console.log(cognomi);

// 3)
console.log( cognomi.sort () )

// 4)
console.log('posizione:');
console.log( cognomi.indexOf (nuovoCognome) + 1);