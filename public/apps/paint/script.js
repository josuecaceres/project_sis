var color = "#000000";
	var tamano = 10;
	var pintura = false;
	function pintar(event){
		var canvas = document.getElementById("canvas");
		var ctx = canvas.getContext("2d");
		var x = event.clientX-10;
		var y = event.clientY+15;
		if(pintura){
			ctx.fillStyle = color;
			ctx.fillRect(x,y,tamano, tamano);
		}
	}
	function activar(){
		pintura = true;
	}
	function desactivar(){
		pintura = false;
	}
	
	function borrador(){
		document.getElementById("canvas").style.cursor = "url('http://reciclay.com.ve/gio/borradorcursor.png'), default";
		color = "#FFFFFF";
		document.getElementById("colores").setAttribute("disabled", "");
	}
	
	function lapiz(){
		document.getElementById("canvas").style.cursor = "url('http://reciclay.com.ve/gio/lapizcursor.gif'), default";
		color = document.getElementById("colores").value;
		document.getElementById("colores").removeAttribute("disabled");
	}
	function scolor(){
		color = document.getElementById("colores").value;
	}
	function stamano(numero) {
		tamano = numero;
	}
	
	function guardari(){
		var canvas = document.getElementById("canvas");
		var imagen = canvas.toDataURL("image/png");
		this.href = imagen;
	}