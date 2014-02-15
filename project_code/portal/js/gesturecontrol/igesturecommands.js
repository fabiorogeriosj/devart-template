//Verificar Google Closure Tools
var GestureCommands = function (){
	this.canvas = null;
	this.frame = null;
	this.context = null;
	this.gesture = null;

	this.Process = function (canvasData, frameData, contextData, gestureData){
		this.canvas = canvasData;
		this.frame = frameData;
		this.context = contextData;
		this.gesture = gestureData;

		var found = false;
		for (var i in this.commands){
			var command = this.commands[i];
			if (command.gestureMade.indexOf(gestureData.type) >= 0){
				OnGetCommand(command.command);
				found = true;
				break;
			}
		}

		if(!found){
			//document.getElementById('voicecontrol').innerText += "\n Sorry: Command not found!";
		}
	}

	var OnGetCommand = function (command){
		command();
	}

	this.LeapToScene = function (leapPos){
      // Gets the interaction box of the current frame
      var iBox = this.frame.interactionBox;

      // Gets the left border and top border of the box
      // In order to convert the position to the proper
      // location for the canvas
      var left = iBox.center[0] - iBox.size[0]/2;
      var top = iBox.center[1] + iBox.size[1]/2;

      // Takes our leap coordinates, and changes them so
      // that the origin is in the top left corner 
      var x = leapPos[0] - left;
      var y = leapPos[1] - top;

      // Divides the position by the size of the box
      // so that x and y values will range from 0 to 1
      // as they lay within the interaction box
      x /= iBox.size[0];
      y /= iBox.size[1];

      // Uses the height and width of the canvas to scale
      // the x and y coordinates in a way that they 
      // take up the entire canvas
      x *= canvas.width;
      y *= canvas.height;

      // Returns the values, making sure to negate the sign 
      // of the y coordinate, because the y basis in canvas 
      // points down instead of up
      return [ x , -y ];
    }

	this.commands = new Array();
}