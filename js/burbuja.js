	var Burbuja = function(anim,px,py,tam,speed){
		this.anim = anim;
		this.px = px;
		this.py = py;
		this.tam = tam;
		this.speed = speed;
		context = anim.getContext();
		canvas = anim.getCanvas();
	}

	Burbuja.prototype.draw = function(linearDistEachFrame){
		this.linearDistEachFrame = linearDistEachFrame;

		//Mueve y chequea la posicion de la caja
		if(this.py > 0 - this.tam){
			this.py -= linearDistEachFrame*this.speed;
		}else{
			this.py = canvas.height+this.tam;
		}

		//Dibujar el circulo
		context.beginPath();
		context.fillStyle="#DB0F7F";
		context.arc(this.px,this.py,this.tam,0,Math.PI*2,false);
		context.fill();
		context.closePath();
	};