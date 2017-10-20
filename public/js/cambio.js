document.getElementById('nobus').style.display = "none";
document.getElementById('sibus').style.display = "block";

function sacamas(){
 document.getElementById('mas1').style.display = "none";
document.getElementById('mas2').style.display = "none";
document.getElementById('mas3').style.display = "none";
document.getElementById('mas4').style.display = "none";}
function nobus() {
	document.getElementById('sibus').style.display = "none";
	document.getElementById('nobus').style.display = "block";
}
function sibuss() {
	document.getElementById('nobus').style.display = "none";
	document.getElementById('sibus').style.display = "block";
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

//rxjs angular
// popup

$(document).ready(function() {
	
	$('.button').click(function() {
		
		type = $(this).attr('data-type');
		
		$('.overlay-containers').fadeIn(function() {
			
			window.setTimeout(function(){
				$('.window-container.'+type).addClass('window-container-visible');
			}, 100);
			
		});
	});
	
	$('.close').click(function() {	
		$('.overlay-container').fadeOut().end().find('.window-container').removeClass('window-container-visibles');
	});
	
});

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


