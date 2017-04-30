var a = prompt('Podaj wartosc a:'),
	b = prompt('Podaj wartosc b:');

if (isNaN(a)) {
	console.log('Nieprawidlowa wartosc ddd');
	alert('Nieprawidlowa wartosc');
} else if (isNaN(b)) {
	console.log('Nieprawidlowa wartosc');
	alert('Nieprawidlowa wartosc');
} else {

	var value= (a * a) + (2 * a * b) - (b * b);

	console.log('Wynik dzialania (a * a) + (2 * a * b) - (b * b) wynosi: ' + value);

	alert('Wynik dzialania (a * a) + (2 * a * b) - (b * b) wynosi: ' + value)

	if (value > 0) {
		console.log('Wynik jest dodatni');
		alert('Wynik jest dodatni'); 
	} else if (value < 0) {
		console.log('Wynik jest ujemny');
		alert('Wynik jest ujemny');
	} else {
		console.log('Wynik jest rowny 0');
		alert('Wynik jest rowny 0');
	}
}
