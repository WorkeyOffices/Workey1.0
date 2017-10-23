function cargaaa(){
	document.getElementById('sectionnn').style.display = "block";
}
function preload(){
	document.getElementById('ciudades').style.display = "block";
}	
function cargaaa1(){
	document.getElementById('sectionnn').style.display = "block";
}
function cargaaa2(){
	document.getElementById('sectionnn').style.display = "block";
}
function cargaaa3(){
	document.getElementById('sectionnn').style.display = "block";
}
function cargaaa4(){
	document.getElementById('sectionnn').style.display = "block";
}
function nocargaaa(){
	document.getElementById('sectionnn').style.display = "none";
}


$(document).ready(function() {
	$('input[id="Localidad"],input[id="dir"],input[id="precio"]').keydown(function(){
		type = $(this).attr('id');
	if ($(this).val().length == 0 | $(this).val().length == 1  ) {
		$("#"+type).addClass("nopass")
		$("#"+type).removeClass("pass")
	}
	else{
		$("#"+type).removeClass("pass")
		$("#"+type).removeClass("nopass")	
	}
})
	$('input[id="precio"]').keydown(function(){
		type = $(this).attr('id');
	if ($(this).val().length == 0 | $(this).val().length == 1  ) {
		$("#"+type).addClass("nopass")
		$("#"+type).removeClass("pass")
	}
	else{
		$("#"+type).removeClass("pass")
		$("#"+type).removeClass("nopass")	
	}
})	
});