window.onload = function(){
	/*----------------------------------------------------
		Variables
		-----------------------------------------------------*/
		var anim = new Animation("miCanvas");
		var canvas = anim.getCanvas();
		var context = anim.getContext();
		var linearSpeed = 50;	
		var burbujas = new Array();
		var cantidadBurbujas = 10;


		window.addEventListener('resize', resizeCanvas, false);

	//Funciones para el random
	function getRandomArbitary (min, max) {
		return Math.random() * (max - min) + min;
	}


	function resizeCanvas() {
			//canvas.width = window.innerWidth;
			canvas.width = $("#experiment").width();
			drawStuff(); 
		}


		for (var i = 0; i < cantidadBurbujas-1; i++) {
			burbujas.push(new Burbuja(anim,Math.floor(Math.random() * canvas.width),canvas.height,getRandomArbitary(10,100),getRandomArbitary(2,6)));
		}


		function drawStuff() {

	//miBurbuja = new Burbuja(anim,canvas.width/2,canvas.height,100);
	/*----------------------------------------------------
		Anim Stage
		-----------------------------------------------------*/
		anim.setStage(function(){


			
		//Update
		var linearDistEachFrame = linearSpeed * this.getTimeInterval() / 1000;
		//Clear
		this.clear();



		for (var i = 0; i < cantidadBurbujas-1; i++) {
			var estaburbuja = burbujas[i];
			estaburbuja.draw(linearDistEachFrame);
		};

		console.log("Cantidad de instancias en burbujas:"+burbujas.length);



	});
		/*-----------------------------------------------------*/
		anim.start();

	};
	resizeCanvas();
};