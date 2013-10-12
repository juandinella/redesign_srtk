window.onload = function(){
	var anim = new Animation("miCanvas");
	var canvas = anim.getCanvas();
	var context = anim.getContext();


	var linearSpeed = 100;

	var bubble = {
		x: canvas.width/2,
		y: canvas.height,
		radius: 100
	};


	anim.setStage(function(){

		//Update
		var linearDistEachFrame = linearSpeed * this.getTimeInterval() / 1000;


		bubble.y -= linearDistEachFrame*1;

		if (bubble.y<0-bubble.radius) {
			bubble.y = canvas.height+bubble.radius;
		}

		
		//clear
		this.clear();

		//Termina de dibujar la caja
		context.beginPath();
		context.fillStyle = "#DB0F7F";
		context.arc(bubble.x,bubble.y,bubble.radius,0,Math.PI*2,false);
		context.fill();
		context.closePath();

	});


	anim.start();



}