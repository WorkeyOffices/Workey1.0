

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

$( document.body )
  .ready(function() {
    $( document.body ).append( $( "<div .ubicacion2>" ) );
    var n = $( ".ubicacion2" ).length;
 	if (n==0) {
	$('.nomestra').html('<div><p>Ups, no encontramos resúltados a tu busqueda </p></div><div><img src="/public/imagenes/img/icon/Iconos-04.png"></div><div><p>Intenta cambiando alguno de los filtros y volvamos a intentarlo</p></div><div><img src="/public/imagenes/img/icon/Iconos-05.png"></div>');	
 	}
   
   })
  // Trigger the click to start
			//$('.nomestra').html('<div><p>Ups, no encontramos resúltados a tu busqueda </p></div><div><img src="/public/imagenes/img/icon/Iconos-04.png"></div><div><p>Intenta cambiando alguno de los filtros y volvamos a intentarlo</p></div><div><img src="/public/imagenes/img/icon/Iconos-05.png"></div>');



$(document).ready(function() {
	$('input[list="datos2"]').keydown(function(){
		if ($(this).val().length >= 2 && $(this).val().length <= 2) {
			$('datalist.datos2').html('<option value="Usaquén"></option><option value="Chapinero"></option><option value="Santa Fe"></option><option value="San Cristóbal"></option><option value="Usme"></option><option value="Tunjuelito"></option><option value="Bosa"></option><option value="bogota"></option><option value="Kennedy"></option><option value="Fontibón"></option><option value="Engativá"></option><option value="Suba"></option><option value="Barrios Unidos"></option><option value="Teusaquillo"></option><option value="Los Mártires"></option><option value="Antonio Nariño"></option><option value="Puente Aranda"></option><option value="La Candelaria"></option><option value="Rafael Uribe Uribe"></option><option value="Ciudad Bolívar"></option><option value="Sumapaz"></option>')
			//console.log($(this))
		}
		if ($(this).val().length < 2 && $(this).val().length >= 0) {
			//console.log($(this))
			$( "option").remove();
		}
	});
	$('input[list="datos1"]').keydown(function(){
		if ($(this).val().length >= 2 && $(this).val().length <= 2) {
			$('datalist.datos1').html('<option value="Usaquén"></option><option value="Chapinero"></option><option value="Santa Fe"></option><option value="San Cristóbal"></option><option value="Usme"></option><option value="Tunjuelito"></option><option value="Bosa"></option><option value="bogota"></option><option value="Kennedy"></option><option value="Fontibón"></option><option value="Engativá"></option><option value="Suba"></option><option value="Barrios Unidos"></option><option value="Teusaquillo"></option><option value="Los Mártires"></option><option value="Antonio Nariño"></option><option value="Puente Aranda"></option><option value="La Candelaria"></option><option value="Rafael Uribe Uribe"></option><option value="Ciudad Bolívar"></option><option value="Sumapaz"></option>')
			//console.log($(this))
		}
		if ($(this).val().length < 2 && $(this).val().length >= 0) {
			//console.log($(this))
			$(".datos1.option").remove();
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


//popup Contacto
$(document).ready(function() {
	$('.button').click(function() {
		type = $(this).attr('data-type');
		$('.overlay-container').fadeIn(function() {
		$('div.overlay-container').html('<div style="z-index:105;" class="window-container zoomout window-container-visible"><div style="z-index:105;" class="sesions"><p style="color:#fff;" id="creacu">Contacto<span class="close">X</span></p><form action="envio3" method="POST" id="for" class="for"><div><label for="name">Nombre completo</label><input name="name" id="name" autocomplete="off" type="text"></div><div> <label for="correo2">Correo</label><input name="correo2" id="correo2" autocomplete="off" type="text"></div><div> <label for="tel">Teléfono</label><input name="tel" id="tel" autocomplete="off" type="text"></div><div> <label for="asunto">Asunto</label><select type="text" name="asunto" placehoder="" id="asunto"> <option value="Busco" selected=" Busco">Busco oficina  </option><option value="Publicar" selected="Publicar">Publicar oficina</option><option value="Otro" selected="Otro"> Otro</option><option value="" selected="" style="display:none;"> --Selecciona--</option></select></div><div> <label for="mess">Mensaje</label><textarea type="text" name="mess" id="mess" style="	" autocomplete="off"></textarea></div> <div id="envok" name="envok" class="envok" ></div> <div> <input value="Enviar" id="send" class="send probe" type="button"></div></form></div></div>');
			


			 $(".probe").click(function(e){
			 	//var data= $('.for input[type="text"],input[type="password"],.for textarea').val();
			 	//alert("Tus datos se han eviado")
			        e.preventDefault();
                    console.log('select_link clicked');
                    
                     /*$.ajax({
                        dataType: 'jsonp',
                        data: "data=yeah",						
                        jsonp: 'callback',
                        url: 'http://localhost:3000/endpoint?callback=?',						
                        success: function(data) {
                            console.log('success');
                            console.log(JSON.stringify(data));
                        }
                    });*/
					var data={}

					data.name = $("#name").val();
					data.correo2 = $("#correo2").val();
					data.tel = $("#tel").val();
					data.asunto = $("#asunto").val();
					data.mess = $("#mess").val();
					//= $('.for input[type="text"],input[type="password"],.for textarea').val();
					console.log(data)
					$.ajax({
						type: 'POST',
						data: JSON.stringify(data),
				        contentType: 'application/json',
                        url: 'http://localhost:5002/envio3',						
                        success: function(data) {
            				$('#envok').html('<p style="color: #666;">Tus datos se enviaron con éxito!</p>')
                        }
                    });
			 });
			$('.close').click(function() {
				$('.overlay-container').fadeOut().end().find('.window-container').removeClass('window-container-visible');
				$( ".window-container" ).remove();
			});
			
		});
	});
});
//popup login y creacion de
$(document).ready(function() {
	$('.buttons').click(function() {
		type = $(this).attr('data-type');
		$('.overlay-containers').fadeIn(function() {
		$('div.overlay-containers').html('<div class="window-containers zoomin window-container-visibles"><div class="sesions"><p style="color:#fff;" id="creacu">Ingresar<span class="close">X</span></p><form action="session" method="POST" id="for" class="for"><div style="padding-top: 30px; " class="form-group"><label for="email">Correo</label><input name="email" id="email" class"form-control="" autocomplete="off required" type="text"></div><div> <label for="password">Contraseña</label><input name="password" id="password" class"form-control"autocomplete="off" type="password" required></div><div> <input value="Ingresar" id="send" clas="send" autocomplete="off" type="submit"></div><div><p style="padding-left: 25%">Nuevo en workey? <input value="Crea una cuenta" data-type="rrr" autocomplete="off" class="rrs"></p></div></form></div></div>');
			$('.close').click(function() {
				$('.overlay-containers').fadeOut().end().find('.window-containers').removeClass('window-container-visibles');
				$( ".window-containers" ).remove();
			});
			$('.rrs').click(function() {
				type = $(this).attr('data-type');
				$('.overlay-container2').fadeIn(function() {
				$('div.overlay-container2').html('<div class="window-container2 rrr window-container-visible2"><div class="sesions"><p style="color:#fff;" id="creacu">INSCRIBIRSE<span class="close">X</span></p><form action="users" method="POST" name="fors" id="fors" class="fors"><div><label for="username">Nombre Completo</label><input name="username" id="username" class"form-control="" required="" autocomplete="off" type="text"></div><div> <label for="telefono">telefono</label><input name="telefono" id="telefono" class"form-control="" required="" autocomplete="off" type="text"></div><div> <label for="email">Correo</label><input name="email" id="email" class"form-control="" title="por el correo" required="" autocomplete="off" type="email"></div><div> <label for="nit">Cédula / NIT</label><input name="nit" id="nit" class"form-control="" required="" autocomplete="off" type="text"></div><div> <label for="password"> Contraseña</label><input name="password" id="password" class"form-control="" required="" autocomplete="off" type="password"></div><div> <label for="password">Confirma tu Contraseña</label><input name="password_confirmation" id="password" class"form-control="" required="" autocomplete="off" type="password"></div><div> <input value="Inscribete" id="send" clas="send" class="btn btn-info" type="submit"></div></form></div></div>');
					$('.close').click(function() {
						$('.overlay-container2').fadeOut().end().find('.window-container2').removeClass('window-container-visible2');
						$( ".window-container2" ).remove();
						$('.overlay-containers').fadeOut().end().find('.window-containers').removeClass('window-container-visibles');
						$( ".window-containers" ).remove();
					});
					
				});
			});
			
		});
	});
});




