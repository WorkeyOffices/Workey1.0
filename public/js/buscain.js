$(document).ready(function() {
	$('input[list="datos"]').keydown(function(){
		if ($(this).val().length >= 2 && $(this).val().length <= 2) {
			$('datalist.datos').html('<option value="Usaquén"></option><option value="Chapinero"></option><option value="Santa Fe"></option><option value="San Cristóbal"></option><option value="Usme"></option><option value="Tunjuelito"></option><option value="Bosa"></option><option value="bogota"></option><option value="Kennedy"></option><option value="Fontibón"></option><option value="Engativá"></option><option value="Suba"></option><option value="Barrios Unidos"></option><option value="Teusaquillo"></option><option value="Los Mártires"></option><option value="Antonio Nariño"></option><option value="Puente Aranda"></option><option value="La Candelaria"></option><option value="Rafael Uribe Uribe"></option><option value="Ciudad Bolívar"></option><option value="Sumapaz"></option>')
			//console.log($(this))
		}
	});
});