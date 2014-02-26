var currentColor = colors[temp];

GestureCommands.prototype.Circle = function(){
	var pos = this.LeapToScene(this.gesture.center);
    var radius = this.gesture.radius;
    var clockwise = false;

    if(this.gesture.normal[2] <= 0){
        clockwise = true;
    }

    this.context.fillStyle   = currentColor;
    this.context.strokeStyle = currentColor;
    this.context.lineWidth   = 5;
    this.context.beginPath();

    this.context.arc(pos[0], pos[1], radius, 0, Math.PI*2);
    this.context.closePath();

    if(clockwise)
    	this.context.stroke();
    else
        this.context.fill();
}
GestureCommands.prototype.Swipe = function(){
	var startPos = this.LeapToScene(this.gesture.startPosition);
    var pos      = this.LeapToScene(this.gesture.position);
      
    this.context.strokeStyle = currentColor;
    this.context.lineWidth = 3;

    this.context.beginPath();
    this.context.moveTo(startPos[0], startPos[1]);
    this.context.lineTo(pos[0], pos[1]);
    this.context.closePath();
    this.context.stroke();
}
GestureCommands.prototype.ScreenTap = function(){
	var pos  = this.LeapToScene(this.gesture.position);    
    var time = this.frame.timestamp;
    console.log(pos, time);
}
GestureCommands.prototype.KeyTap = function(){
	var pos  = this.LeapToScene(this.gesture.position);
    var time = this.frame.timestamp;
    console.log(pos, time);
}

gestureControl.GestureCommandInstance().commands.push({
	command : function (){ gestureControl.GestureCommandInstance().Circle() },
	gestureMade : new Array ("circle")
});
gestureControl.GestureCommandInstance().commands.push({
	command : function (){ gestureControl.GestureCommandInstance().Swipe() },
	gestureMade : new Array ("swipe")
});
gestureControl.GestureCommandInstance().commands.push({
	command : function (){ gestureControl.GestureCommandInstance().ScreenTap() },
	gestureMade : new Array ("screenTap")
});
gestureControl.GestureCommandInstance().commands.push({
	command : function (){ gestureControl.GestureCommandInstance().KeyTap() },
	gestureMade : new Array ("keyTap")
});