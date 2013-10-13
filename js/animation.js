
var Animation = function(canvasId){

	//Llama al ID del canvas en base al param que le pasamos.
	this.canvas = document.getElementById(canvasId);
	//Setea el contexto de ese canvas a 2D
	this.context = this.canvas.getContext("2d");


	//Este es el conjunto de variables que manipula la animación
	this.t = 0;
	this.timeInterval = 0;
	this.startTime = 0;
	this.lastTime = 0;
	this.frame = 0;
	this.animating = false;


	/*
	Este snippet esta hecho por Paul Irish
	http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/

	Lo que hace es generar un requestAnimFrame croosbrowser para que podamos saber
	los FPS 

	*/
	window.requestAnimFrame = (function(){
		return  window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		function( callback ){
			window.setTimeout(callback, 1000 / 60);
		};
	})();



};


Animation.prototype.getContext = function(){
    return this.context;
};

Animation.prototype.getCanvas = function(){
    return this.canvas;
};

Animation.prototype.clear = function(){
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Animation.prototype.setStage = function(func){
    this.stage = func;
};

Animation.prototype.isAnimating = function(){
    return this.animating;
};

Animation.prototype.getFrame = function(){
    return this.frame;
};

Animation.prototype.start = function(){
    this.animating = true; 
    var date = new Date();
    this.startTime = date.getTime();
    this.lastTime = this.startTime;
    
    if (this.stage !== undefined) {
        this.stage();
    }
    
    this.animationLoop();
};

Animation.prototype.stop = function(){
    this.animating = false;
};

Animation.prototype.getTimeInterval = function(){
    return this.timeInterval;
};

Animation.prototype.getTime = function(){
    return this.t;
};

Animation.prototype.getFps = function(){
    return this.timeInterval > 0 ? 1000 / this.timeInterval : 0;
};

Animation.prototype.animationLoop = function(){
    var that = this;
    
    this.frame++;
    var date = new Date();
    var thisTime = date.getTime();
    this.timeInterval = thisTime - this.lastTime;
    this.t += this.timeInterval;
    this.lastTime = thisTime;
    
    if (this.stage !== undefined) {
        this.stage();
    }
    
    if (this.animating) {
        requestAnimFrame(function(){
            that.animationLoop();
        });
    }
};