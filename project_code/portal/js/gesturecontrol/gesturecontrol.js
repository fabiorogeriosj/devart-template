var GestureControl = function (){
	var canvas = null;
	var context = null;
	var controller = null;
	var gestureCommands = null;
	var self = this;

	var ControllerInstance = function(){
		if (controller == null){
			CreateController();
		}

		return controller;
	}

	var CanvasInstance = function(){
		if (canvas == null){
			CreateCanvas();
		}

		return canvas;
	}

	var ContextInstance = function(){
		if (context == null){
			CreateContext();
		}

		return context;
	}

	this.GestureCommandInstance = function(){
		if (gestureCommands == null){
			gestureCommands = new GestureCommands();
		}

		return gestureCommands;
	}

	var CreateCanvas = function(){
		canvas = document.getElementById('canvas');
		canvas.width = canvas.clientWidth;
		canvas.height = canvas.clientHeight;
	}

	var CreateContext = function(){
		context = CanvasInstance().getContext('2d');
	}

	var CreateController = function(){
		controller = new Leap.Controller({enableGestures: true});
		controller.on('frame', function(frame){
			OnFrame(frame);
		});
    	controller.on('connect', function(){
      		console.log('Successfully connected.');
    	});
	    controller.on('deviceConnected', function() {
      		console.log('A Leap device has been connected.');
    	});
	    controller.on('deviceDisconnected', function() {
      		console.log('A Leap device has been disconnected.');
    	});
    	controller.on('ready', function(){
    		console.log('A Leap device is ready.');
    	});
	}

	var OnFrame = function(frame){
      	for( var i = 0; i < frame.gestures.length; i++ ){
        	var gesture = frame.gestures[i];
        	self.GestureCommandInstance().Process(CanvasInstance(), frame, ContextInstance(), gesture);
		}
	}

	this.Start = function (){
		ControllerInstance().connect();
	}
}