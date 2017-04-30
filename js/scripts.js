var a = prompt('Podaj wartosc a:'),
	b = prompt('Podaj wartosc b:'),
	value = (a * a) + (2 * a * b) - (b * b);

if (isNaN(value)) {
	console.log('Nieprawidlowa wartosc');
	alert('Nieprawidlowa wartosc');
} else {
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
