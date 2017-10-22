

function sacamas(){
 document.getElementById('mas1').style.display = "none";
document.getElementById('mas2').style.display = "none";
document.getElementById('mas3').style.display = "none";
document.getElementById('mas4').style.display = "none";
}

function nobus() {
		$("#nobus").removeClass("active2")
		$("#sibus").addClass("active2")
		$("#enlis").addClass("active")
		$("#busss").removeClass("active")
}
function sibuss() {
		$("#nobus").addClass("active2")
		$("#sibus").removeClass("active2")
		$("#busss").addClass("active")
		$("#enlis").removeClass("active")
}



function mas() {
	document.getElementById('mas1').style.display = "block";
}
function mas2() {
	document.getElementById('mas2').style.display = "block";
}
function mas3() {
	document.getElementById('mas3').style.display = "block";
}
function mas4() {
	document.getElementById('mas4').style.display = "block";
}

$(document).ready(function() {
	$('input[list="datos2"]').keydown(function(){
		if ($(this).val().length >= 2 && $(this).val().length <= 2) {
			$('datalist.datos2').html('<option value="Usaquén"></option>,<option value="Chapinero"></option>,<option value="Santa Fe"></option>,<option value="San Cristóbal"></option>,<option value="Usme"></option>,<option value="Tunjuelito"></option>,<option value="Bosa"></option>,<option value="bogota"></option>,<option value="Kennedy"></option>,<option value="Fontibón"></option>,<option value="Engativá"></option>,<option value="Suba"></option>,<option value="Barrios Unidos"></option>,<option value="Teusaquillo"></option>,<option value="Los Mártires"></option>,<option value="Antonio Nariño"></option>,<option value="Puente Aranda"></option>,<option value="La Candelaria"></option>,<option value="Rafael Uribe Uribe"></option>,<option value="Ciudad Bolívar"></option>,<option value="Sumapaz"></option>')
			//console.log($(this))
		}
	});
	$('input[list="datos1"]').keydown(function(){
		if ($(this).val().length >= 2 && $(this).val().length <= 2) {
			$('datalist.datos1').html('<option value="Usaquén"></option>,<option value="Chapinero"></option>,<option value="Santa Fe"></option>,<option value="San Cristóbal"></option>,<option value="Usme"></option>,<option value="Tunjuelito"></option>,<option value="Bosa"></option>,<option value="bogota"></option>,<option value="Kennedy"></option>,<option value="Fontibón"></option>,<option value="Engativá"></option>,<option value="Suba"></option>,<option value="Barrios Unidos"></option>,<option value="Teusaquillo"></option>,<option value="Los Mártires"></option>,<option value="Antonio Nariño"></option>,<option value="Puente Aranda"></option>,<option value="La Candelaria"></option>,<option value="Rafael Uribe Uribe"></option>,<option value="Ciudad Bolívar"></option>,<option value="Sumapaz"></option>')
			//console.log($(this))
		}
	});
});
$(document).ready(function() {
	$('.close').click(function(){
			$('.for input[type="text"],input[type="password"],.for textarea').val("");
			$('.fors input[type="text"],input[type="password"],input[type="email"],.for textarea').val("");
	});
});

//rxjs angular
// popup

$(document).ready(function() {
	
	$('.button').click(function() {
		type = $(this).attr('data-type');
		
		$('.overlay-container').fadeIn(function() {
			
			window.setTimeout(function(){
				$('.window-container.'+type).addClass('window-container-visible');
			}, 100);
			
		});
	});
	
	$('.close').click(function() {	
		$('.overlay-container').fadeOut().end().find('.window-container').removeClass('window-container-visible');
	});
	
});

$(document).ready(function() {
	
	$('.buttons').click(function() {
		
		type = $(this).attr('data-type');
		
		$('.overlay-containers').fadeIn(function() {
			
			window.setTimeout(function(){
				$('.window-containers.'+type).addClass('window-container-visibles');
			}, 100);
			
		});
	});
	
	$('.close').click(function() {
		$('.overlay-containers').fadeOut().end().find('.window-containers').removeClass('window-container-visibles');
	});
	$('.rrr').click(function() {
		$('.overlay-container').fadeOut().end().find('.window-container').removeClass('window-container-visible');
	});
	
});

$(document).ready(function() {
	$('.rrs').click(function() {
		type = $(this).attr('data-type');
		
		$('.overlay-container2').fadeIn(function() {
			window.setTimeout(function(){
				$('.window-container2.'+type).addClass('window-container-visible2');
			}, 100);
		});
	});
	$('.close').click(function() {
		$('.overlay-container2').fadeOut().end().find('.window-container2').removeClass('window-container-visible2');	
	});
});

$(document).ready(function() {

 $(".probe").click(function(){
 	var data= $('.for input[type="text"],input[type="password"],.for textarea').val();
 	alert("Tus datos se han eviado")

    /*$.ajax({url: "demo_test.txt", success: function(result){
        $("#div1").html(result);
    }});*/
}); 
});