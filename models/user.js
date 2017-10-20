// inicalizar base 
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/fotos");
mongoose.Promise = global.Promise;

var posible_valor = ["M","F"];
var email_mathc = [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ , "Coloca un email valido"];  

var password_validation = {
	validator: function(p){
			return this.password_confirmation == p;
		},
		message: "Las contraseñas no son iguales "
}

var user_Schema = new Schema( {
	email: {type: String, require:"es obliugatorio un correo", match:  email_mathc},
	password:{type:String,minleng:[6,"por favor adjunta una contraseña mas larga"], 
	validate: password_validation},
	username:{type:String,require:true,maxleng:[50,"username muy largo"]},
	telefono:{type:String,require:true,maxleng:[20]},
	nit:{type:String,require:true},	
	subirinfo:{type:Boolean,require:true},
//	sex: {type:String,enum:{values: posible_valor,message:"opcion no valida "}}
});

user_Schema.virtual("password_confirmation").get(function(){
		return this.p_c;
	}).set(function(password){
		this.p_c = password;
});



var User = mongoose.model("User", user_Schema);
//modelo de conexiones
module.exports.User = User;
