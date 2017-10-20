function validacion() {
valor = document.getElementById("upload").value;
if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
	alert("te falto el nombre")
  return false;
}
valor2 = document.getElementById("password").value;
if( valor2 == null || valor.length == 0 || /^\s+$/.test(valor2) ) {
	alert("te falto la contraseña")
  return false;
}
valor3 = document.getElementById("username").value;
if( valor3 == null || valor3.length == 0 || /^\s+$/.test(valor3) ) {
	alert("te falto el nombre")
  return false;
}
valor3 = document.getElementById("email").value;
if(!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor3) ) {
	alert("te falto el nombre")
  return false;
}
}


function val(){

valor3 = document.getElementById("nit").value;
if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
	alert("te falto el nit")
  return false;
}

}



/*$(window).load(function() {



var h = getElementById('username')
alert("helado" + h)

});*/


// valudar y optener el valor de un campo       var valor = document.getElementById("texto").value;

//maximo d caractrs   
/*
function limita(maximoCaracteres) {
  var elemento = document.getElementById("texto");
  if(elemento.value.length >= maximoCaracteres ) {
    return false;
  }
  else {
    return true;
  }
}
*/

/* darle n valor a algo
    function fileOnload(e) {
      var result = e.target.result;
      $('#imgSalida').attr("src", result);
    }
*/